import React, {useRef, useState, useEffect, useCallback} from 'react';
import {Alert, Platform} from 'react-native';
import PropTypes from 'prop-types';
import Mask from '../Mask';
import Camera from '~/components/Camera';

import challenge from '../../utils';
import {Container, Info, Round} from './styles';

const Validation = ({typeValidation, authorize}) => {
  const cameraRef = useRef();
  const [preview, setPreview] = useState(null);
  const [steps, setSteps] = useState({});
  const [message, setMessage] = useState(null);

  const handleCamera = (info) => {
    if (info.faces.length === 0 || steps.takePicture) return;
    challenge[typeValidation].main(info.faces, steps, setSteps, setMessage);
  };

  const handleClearPicture = useCallback(() => {
    setSteps({});
    setPreview(null);
  }, []);

  const takePicture = useCallback(async () => {
    try {
      const data = await cameraRef.current.takePictureAsync({quality: 0.5});
      setPreview(data.uri);
    } catch (err) {
      Alert.alert('Ops!', 'Não foi possivel capturar a imagem!');
    }
  }, []);

  useEffect(() => {
    if (!steps.started || !steps.takePicture) return;
    setMessage('Sucesso');
    setSteps((oldValue) => ({...oldValue, started: false}));
    if (Platform.OS === 'ios') {
      takePicture();
      return;
    }
    // para corrigir o bug que acontece em alguns androids de retardo na hora de capturar a imagem.
    setTimeout(() => {
      takePicture();
    }, 1000);
  }, [steps, takePicture]);

  return (
    <Container>
      <Camera
        ref={cameraRef}
        handleDismissError={() => {}}
        onFacesDetected={handleCamera}
        preview={preview}
        handleClearPicture={handleClearPicture}
        handleConfirm={() => authorize(true)}
      />
      {!preview && (
        <Mask>
          <Round success={steps.takePicture}>
            <Info>{message}</Info>
          </Round>
        </Mask>
      )}
    </Container>
  );
};

Validation.propTypes = {
  typeValidation: PropTypes.string.isRequired,
  authorize: PropTypes.func.isRequired,
};

export default Validation;

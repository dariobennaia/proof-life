import React, {useState, useEffect, memo, forwardRef} from 'react';
import {Alert} from 'react-native';
import PropTypes from 'prop-types';
import {RNCamera} from 'react-native-camera';

import {
  Container,
  CameraRN,
  Wrapper,
  Preview,
  ActionButtonPreview,
} from './styles';

const Camera = (
  {onFacesDetected, preview, handleClearPicture, handleConfirm},
  ref,
) => {
  const [statusCamera, setStatusCamera] = useState('');

  useEffect(() => {
    if (statusCamera.cameraStatus !== 'NOT_AUTHORIZED') return;
    Alert.alert(
      'Ops!',
      'Por favor, habilite as permissões da camera nas configurações do seu dispositivo.',
    );
  }, [statusCamera]);

  return (
    <Container>
      {!preview && (
        <>
          <CameraRN
            faceDetectionMode={RNCamera.Constants.FaceDetection.Mode.accurate}
            faceDetectionLandmarks={
              RNCamera.Constants.FaceDetection.Landmarks.all
            }
            faceDetectionClassifications={
              RNCamera.Constants.FaceDetection.Classifications.all
            }
            onFacesDetected={onFacesDetected}
            // onFaceDetectionError={(err) => console.tron.log('FDError', err)}
            autoFocus={RNCamera.Constants.AutoFocus.on}
            ref={ref}
            type={RNCamera.Constants.Type.front}
            flashMode={RNCamera.Constants.FlashMode.off}
            captureAudio={false}
            androidCameraPermissionOptions={{
              title: 'Permissão para usar a camera do dispositivo',
              message: 'Precisamos da sua permissão para usar a camera',
              buttonPositive: 'Sim',
              buttonNegative: 'Não',
            }}
            onStatusChange={setStatusCamera}
          />
        </>
      )}

      {preview && (
        <>
          <Preview source={{uri: preview}} />
          <Wrapper preview>
            <ActionButtonPreview onPress={handleClearPicture} clear>
              TIRAR OUTRA
            </ActionButtonPreview>
            <ActionButtonPreview onPress={handleConfirm}>
              PRONTO
            </ActionButtonPreview>
          </Wrapper>
        </>
      )}
    </Container>
  );
};

Camera.propTypes = {
  onFacesDetected: PropTypes.func.isRequired,
  preview: PropTypes.oneOfType([PropTypes.string, PropTypes.any]).isRequired,
  handleClearPicture: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
};

export default memo(forwardRef(Camera));

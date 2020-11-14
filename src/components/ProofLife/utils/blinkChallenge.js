import validations from './validations';

const blinkChallenge = {
  /**
   * Desafio
   */
  _challenge: (faces, setSteps) => {
    const {
      yawAngle,
      leftEyeOpenProbability,
      rightEyeOpenProbability,
    } = faces[0];

    setSteps((oldValue) => {
      if (
        validations.centeredFace(yawAngle) &&
        validations.wink(leftEyeOpenProbability, rightEyeOpenProbability)
      ) {
        return {...oldValue, takePicture: 1};
      }
      return oldValue;
    });
  },

  /**
   * Funcao responsavel por resetar o desafio em caso de alguma inconsistencia.
   */
  _guideChallenge: (faces, steps, setSteps, setMessage) => {
    if (!faces || steps.takePicture) return;
    const {
      rollAngle,
      faceID,
      yawAngle,
      bounds: {size, origin},
    } = faces[0];

    const initialState = {faceID, started: false};

    if (validations.isItTooFar(size)) {
      setSteps(initialState);
      setMessage('Aproxime mais o seu rosto');
      return;
    }

    if (validations.isItTooClose(size)) {
      setSteps(initialState);
      setMessage('Afaste mais o seu rosto');
      return;
    }

    if (!validations.isValidRollAngle(rollAngle)) {
      setSteps(initialState);
      setMessage('Não rotacione seu rosto');
      return;
    }

    if (
      !validations.isValidOrigin(origin) ||
      !validations.centeredFace(yawAngle)
    ) {
      setSteps(initialState);
      setMessage('Mantenha seu rosto centralizado');
      return;
    }

    if (!validations.isUniqueFace(faces.length)) {
      setSteps(initialState);
      setMessage('Somente seu rosto deve está camera');
      return;
    }

    if (steps.faceID !== faceID) {
      setSteps(initialState);
      return;
    }

    setSteps((oldValue) => ({...oldValue, started: true}));
    setMessage('Pisque.');
  },

  /**
   * Funcao principal
   */
  main: (faces, steps, setSteps, setMessage) => {
    blinkChallenge._guideChallenge(faces, steps, setSteps, setMessage);

    if (!steps.started || steps.takePicture) return;
    blinkChallenge._challenge(faces, setSteps);
  },
};

export default blinkChallenge;

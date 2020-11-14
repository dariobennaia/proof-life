import validations from './validations';

const moovingChallenge = {
  /**
   * Desafio
   */
  _challenge: (faces, setSteps) => {
    const {yawAngle} = faces[0];

    setSteps((oldValue) => {
      if (!oldValue.movedLeft && validations.movedLeft(yawAngle)) {
        return {...oldValue, movedLeft: true};
      }
      if (
        oldValue.movedLeft &&
        !oldValue.movedRight &&
        validations.movedRight(yawAngle)
      ) {
        return {...oldValue, movedRight: true};
      }
      if (
        oldValue.movedRight &&
        !oldValue.faceCentred &&
        validations.centeredFace(yawAngle)
      ) {
        return {...oldValue, faceCentred: true};
      }
      if (oldValue.faceCentred) {
        return {...oldValue, takePicture: 1};
      }
      return oldValue;
    });
  },

  /**
   * Funcao responsavel por resetar o desafio em caso de alguma inconsistencia.
   */
  _resetChallenge: (faces, steps, setSteps, setMessage) => {
    if (!faces || steps.takePicture) return;
    const {
      rollAngle,
      faceID,
      bounds: {size, origin},
    } = faces[0];

    const initialState = {
      faceID,
      started: false,
      movedLeft: false,
      movedRight: false,
    };

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

    if (!validations.isValidOrigin(origin)) {
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
  },

  /**
   * Funcao responsavel pela mensagens de orientacao.
   */
  _guideMessages: (steps, setMessage) => {
    if (!steps.movedLeft) {
      setMessage('Vire seu rosto para a esquerda');
      return;
    }

    if (!steps.movedRight) {
      setMessage('Vire seu rosto para a direita');
      return;
    }

    if (!steps.faceCentred) {
      setMessage('Centralize o rosto.');
    }
  },

  /**
   * Funcao principal
   */
  main: (faces, steps, setSteps, setMessage) => {
    moovingChallenge._resetChallenge(faces, steps, setSteps, setMessage);

    if (!steps.started || steps.takePicture) return;
    moovingChallenge._challenge(faces, setSteps);
    moovingChallenge._guideMessages(steps, setMessage);
  },
};

export default moovingChallenge;

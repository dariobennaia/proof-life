import {Dimensions, Platform} from 'react-native';

const {width: widthScreen, height: heightScreen} = Dimensions.get('window');

export const between = (value, [a, b]) =>
  value > Math.min(a, b) && value < Math.max(a, b);

const calcResolutionHeight = (dimension) =>
  ((heightScreen * dimension) / 709.5).toFixed(0);

const calcResolutionWidth = (dimension) =>
  ((widthScreen * dimension) / 360).toFixed(0);

/**
 * Validacoes do processo de biometria
 */
const validations = {
  /**
   * Funcao responsavel por verificar se o rosto esta muito proximo a camera.
   */
  isItTooClose: ({height}) => {
    return height > calcResolutionHeight(350);
  },

  /**
   * Funcao responsavel por verificar se o rosto esta muito distante da camera.
   */
  isItTooFar: ({height}) => {
    return height < calcResolutionHeight(230);
  },

  /**
   * Funcao responsavel por verificar se o rosto nao foi rotacionado.
   */
  isValidRollAngle: (rollAngle) => {
    return between(rollAngle, [-50, 50]);
  },

  /**
   * Funcao responsavel por verificar se o rosto esta esta dentro da area.
   */
  isValidOrigin: ({y}) => {
    return between(y, [calcResolutionHeight(40), calcResolutionHeight(215)]);
  },

  /**
   * Funcao responsavel por verificar se o rosto e o unico posicionado em frente
   * a camera.
   */
  isUniqueFace: (facesDetected) => {
    return facesDetected <= 1;
  },

  /**
   * Funcao responsavel por verificar se o rosto foi movido para a esquerda.
   */
  movedLeft: (yawAngle) => {
    return Platform.OS === 'android' ? yawAngle > 12 : yawAngle < -12;
  },

  /**
   * Funcao responsavel por verificar se o rosto foi movido para a direita.
   */
  movedRight: (yawAngle) => {
    return Platform.OS === 'android' ? yawAngle < -12 : yawAngle > 12;
  },

  /**
   * Funcao responsavel por verificar se o rosto foi centralizado.
   */
  centeredFace: (yawAngle) => {
    return between(yawAngle, [-3, 3]);
  },

  /**
   * Funcao responsavel por verificar se os olhos piscaram.
   */
  wink: (leftEyeOpenProbability, rightEyeOpenProbability) => {
    return leftEyeOpenProbability < 0.03 && rightEyeOpenProbability < 0.03;
  },
};

export default validations;

import styled, {css} from 'styled-components/native';
import colors from '~/styles/colors';

export const Container = styled.View`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Guide = styled.View`
  width: 100%;
  justify-content: space-between;
  ${({guideBottom}) =>
    guideBottom
      ? css`
          justify-content: center;
          align-items: center;
          height: 40%;
          background: ${colors.transparent};
          align-items: center;
          padding: 20px;
        `
      : css`
          justify-content: space-between;
          height: 60%;
          padding: 0 30px 20px 10px;
        `};
`;

export const GuideRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const GuideBorder = styled.View`
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  border-width: 5px;
  border-top-color: ${({topLeft, topRight}) =>
    topLeft || topRight ? colors.primary : 'transparent'};

  border-left-color: ${({topLeft, bottomLeft}) =>
    topLeft || bottomLeft ? colors.primary : 'transparent'};

  border-bottom-color: ${({bottomLeft, bottomRight}) =>
    bottomLeft || bottomRight ? colors.primary : 'transparent'};

  border-right-color: ${({bottomRight, topRight}) =>
    bottomRight || topRight ? colors.primary : 'transparent'};
`;

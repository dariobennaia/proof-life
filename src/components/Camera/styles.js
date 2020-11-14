import styled from 'styled-components/native';
import {RNCamera} from 'react-native-camera';
import colors from '~/styles/colors';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
`;

export const CameraRN = styled(RNCamera)`
  flex: 1;
`;

export const Preview = styled.Image`
  flex: 1;
`;

export const Wrapper = styled.View`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 30px;
`;

export const ActionButtonPreview = styled(Button)`
  width: 47%;
  background: ${(props) => (props.clear ? colors.danger : colors.primary)};
`;

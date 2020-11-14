import styled from 'styled-components/native';
import {RNCamera} from 'react-native-camera';
import {Dimensions} from 'react-native';
import colors from '~/styles/colors';
import metrics from '~/styles/metrics';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const CameraRN = styled(RNCamera)`
  flex: 1;
`;

export const Preview = styled.Image`
  flex: 1;
`;

export const Wrapper = styled.View`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 25%;
  background: ${colors.transparent};
  flex-direction: ${(props) => (props.preview ? 'row' : 'column')};
  justify-content: space-between;
  align-items: ${(props) => (props.preview ? 'flex-end' : 'center')};
  padding: 30px;
`;

export const Background = styled.Image`
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
`;

export const Round = styled.View`
  height: 140px;
  width: 140px;
  border-radius: 70px;
  background: ${colors.transparent};
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: ${metrics.border} solid
    ${({success}) => (success ? colors.success : colors.error)};
`;

export const Info = styled.Text`
  color: ${colors.white};
  text-align: center;
`;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: stretch;
`;

export const ActionButtonPreview = styled(Button)`
  width: 40%;
  background: ${(props) => (props.clear ? colors.danger : colors.primary)};
`;

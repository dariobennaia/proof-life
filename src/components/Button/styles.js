import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import colors from '~/styles/colors';
import metrics from '~/styles/metrics';

export const Container = styled(RectButton)`
  height: 45px;
  background: ${colors.primary};
  border-radius: ${metrics.borderRadius};
  align-items: center;
  justify-content: center;
  padding: 0 25px;
`;

export const Text = styled.Text`
  color: ${colors.textPrimary};
  font-weight: bold;
  font-size: ${metrics.fontSizeSmall};
`;

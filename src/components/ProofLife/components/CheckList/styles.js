import styled from 'styled-components/native';
import colors from '~/styles/colors';
import metrics from '~/styles/metrics';

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

export const Content = styled.View`
  flex: 7;
  padding: 10px;
  align-self: stretch;
  align-items: center;
`;

export const Footer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-self: stretch;
`;

export const CheckListTitle = styled.Text`
  color: ${colors.primary};
  font-size: ${metrics.fontSizeBig};
  margin-bottom: 25px;
`;

export const CheckList = styled.FlatList`
  align-self: stretch;
`;

export const Item = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`;

export const ItemDescription = styled.Text`
  font-size: ${metrics.fontSizeMedium};
  flex: 1;
  flex-wrap: wrap;
  margin-left: 10px;
`;

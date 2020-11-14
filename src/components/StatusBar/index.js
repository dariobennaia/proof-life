import React from 'react';
import {StatusBar} from 'react-native';
import colors from '~/styles/colors';

const StatusBarComponents = () => {
  return (
    <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
  );
};

export default StatusBarComponents;

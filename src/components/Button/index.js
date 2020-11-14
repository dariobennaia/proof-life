import React from 'react';
import {ActivityIndicator, TouchableNativeFeedback} from 'react-native';

import PropTypes from 'prop-types';

import {Container, Text} from './styles';

function Button({children, loading, onPress, ...rest}) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <Container {...rest}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text>{children}</Text>
        )}
      </Container>
    </TouchableNativeFeedback>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  onPress: () => {},
  loading: false,
};

export default Button;

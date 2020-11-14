import React from 'react';
import PropTypes from 'prop-types';
import Background from '~/components/Background';
import {Content, ButtonValidation} from './styles';

const Main = ({navigation}) => {
  const handleNavigate = async (type) => {
    navigation.navigate('proof-life', {type});
  };

  return (
    <Background>
      <Content>
        <ButtonValidation onPress={() => handleNavigate('mooving')}>
          VALIDAÇÃO COM MOVIMENTO
        </ButtonValidation>
        <ButtonValidation onPress={() => handleNavigate('blink')}>
          VALIDAÇÃO PISCANDO O OLHO
        </ButtonValidation>
      </Content>
    </Background>
  );
};

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

Main.navigationOptions = {
  title: 'Main',
  headerTitleStyle: {
    alignSelf: 'center',
  },
};

export default Main;

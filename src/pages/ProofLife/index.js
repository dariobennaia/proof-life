import React from 'react';
import PropTypes from 'prop-types';
import Background from '~/components/Background';
import ProofLifeComponent from '~/components/ProofLife';

const ProofLife = ({navigation, route}) => {
  const {type} = route.params;

  const handleValidations = () => {
    navigation.goBack();
  };

  return (
    <Background>
      <ProofLifeComponent authorize={handleValidations} typeValidation={type} />
    </Background>
  );
};

ProofLife.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      type: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

ProofLife.navigationOptions = {
  title: 'Proof Life',
};

export default ProofLife;

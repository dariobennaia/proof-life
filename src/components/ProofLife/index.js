import React, {useState} from 'react';
import PropTypes from 'prop-types';
import CheckList from './components/CheckList';
import Validation from './components/Validation';
import {Container} from './styles';

const Validations = ({typeValidation, authorize}) => {
  const [step, setStep] = useState(1);

  const hendleNextStep = () => setStep(step + 1);

  return (
    <Container>
      {step === 1 && <CheckList next={hendleNextStep} />}
      {step === 2 && (
        <Validation authorize={authorize} typeValidation={typeValidation} />
      )}
    </Container>
  );
};

Validations.propTypes = {
  authorize: PropTypes.func.isRequired,
  typeValidation: PropTypes.string,
};

Validations.defaultProps = {
  typeValidation: 'blink',
};

export default Validations;

import React, {memo} from 'react';
import PropTypes from 'prop-types';

import {Container, Guide, GuideRow, GuideBorder} from './styles';

const Mask = ({children}) => {
  return (
    <Container>
      <Guide>
        <GuideRow>
          <GuideBorder topLeft />
          <GuideBorder topRight />
        </GuideRow>
        <GuideRow>
          <GuideBorder bottomLeft />
          <GuideBorder bottomRight />
        </GuideRow>
      </Guide>
      <Guide guideBottom>{children}</Guide>
    </Container>
  );
};

Mask.propTypes = {
  children: PropTypes.element.isRequired,
};

export default memo(Mask);

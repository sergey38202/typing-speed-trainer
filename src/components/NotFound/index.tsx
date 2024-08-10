import React from 'react';

import * as SC from './styles';

const NotFound: React.FC = () => {
  return (
    <SC.NotFoundContainer>
      <SC.NotFoundTitle>404</SC.NotFoundTitle>
      <SC.NotFoundText>Oops! The page you are looking for does not exist.</SC.NotFoundText>
      <SC.HomeLink to="/">Go back to Home</SC.HomeLink>
    </SC.NotFoundContainer>
  )
}

export default NotFound

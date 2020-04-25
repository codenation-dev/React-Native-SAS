/**
 * @flow
 */

import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.View`
  margin-horizontal: 0;
  margin-vertical: 40px;
  padding-horizontal: 24px;
`;

const Step = ({children}) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Step;

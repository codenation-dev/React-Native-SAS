/**
 * @flow
 */

import styled from 'styled-components';

const Title = styled.Text`
  font-weight: 600;
  font-size: ${props => props.theme.font.sizes.large}px;
  color: ${props => props.color || props.theme.colors.white};
`;

export default Title;

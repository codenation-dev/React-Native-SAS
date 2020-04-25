/**
 * @flow
 */

import styled from 'styled-components';

const Subtitle = styled.Text`
  font-weight: 600;
  font-size: ${props => props.theme.font.sizes.medium}px;
  color: ${props => props.color || props.theme.colors.light};
`;

export default Subtitle;

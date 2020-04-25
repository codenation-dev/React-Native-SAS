/**
 * @flow
 */

import {fontSizes} from '../styles';

const accessible = {
  font: {
    sizes: {
      tiny: fontSizes.tiny + (fontSizes.tiny / 4),
      small: fontSizes.small + (fontSizes.small / 4),
      medium: fontSizes.medium + (fontSizes.medium / 4),
      large: fontSizes.large + (fontSizes.large / 4),
    },
  },
};

export default accessible;

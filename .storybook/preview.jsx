import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import * as nextImage from 'next/image'

import ThemeDecorator from './ThemeDecorator';

addDecorator((Story) => (
  <ThemeDecorator>
    <Story />
  </ThemeDecorator>
));

addDecorator(withKnobs);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
});

// Replace next/image for Storybook
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => (<img {...props} />)
})

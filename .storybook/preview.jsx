import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

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

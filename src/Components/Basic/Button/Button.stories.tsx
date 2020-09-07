// #region Global Imports
import React from 'react';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
// #endregion Global Imports

// #region Local Imports
import { Button } from './index';
// #endregion Local Imports

export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs]
};

const variant = {
  outlined: 'outlined',
  default: 'default',
  clear: 'clear',
  square: 'square'
};

type positionAll = 'outlined' | 'default' | 'clear' | 'square';

export const Default = () => (
  <Button
    active={boolean('Active', false)}
    modifier={radios('Different buttons', variant, 'outlined') as positionAll}
    disabled={boolean('Disabled', false)}
    loading={boolean('Loading', false)}
    onClick={action('onClick')}
    withArrow={boolean('Arrow', false)}
  >
    {text('Text', 'Hello Button')}
  </Button>
);

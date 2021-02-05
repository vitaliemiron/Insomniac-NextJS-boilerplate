import React from 'react';
import { render } from '@Test';
import { Button } from './index';

describe('Button', () => {
  it('should render without crashing', () => {
    render(
      <Button>
        <div />
      </Button>
    );
  });
});

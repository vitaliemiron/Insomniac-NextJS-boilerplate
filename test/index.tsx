/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// test-utils.js
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from '@Utils';

// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
const Providers: React.FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeProvider>
  );
};

const customRender = (ui: JSX.Element, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };

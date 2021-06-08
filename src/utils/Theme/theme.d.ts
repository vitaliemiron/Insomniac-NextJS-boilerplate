// #region Global Imports
import 'styled-components';
import { Theme as MuiTheme } from '@material-ui/core/styles/createMuiTheme';

import * as React from 'react';

// #endregion Global Imports
interface Color {
  base: string;
  [key: string]: string;
}

interface Heading {
  fontSize: number;
  lineHeight?: React.CSSProperties['lineHeight'];
  padding?: React.CSSProperties['padding'];
  maxWidth?: React.CSSProperties['maxWidth'];
  letterSpacing?: React.CSSProperties['letterSpacing'];
  sm: {
    fontSize: number;
  };
}

interface InsomniacTheme {
  colors: {
    [key: string]: Color;
  };
  borderRadius: {
    base: string;
    mobile: string;
  };
  navbar: {
    'z-index': number;
  };
  typography: {
    rootBase: string;
    fontBase: string;
  };
}

export interface InsomniacColorScheme {
  [key: string]: string[];
}

declare module '@material-ui/core/styles/createTypography' {
  interface FontStyle {
    htmlSize: string;
    headings: {
      h1: {
        main: Heading;
        secondary: Heading;
      };
    };
  }
}

/* eslint-disable @typescript-eslint/no-empty-interface */
declare module 'styled-components' {
  interface DefaultTheme extends MuiTheme {}
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme extends InsomniacTheme {}
  // allow configuration using `createMuiTheme`
  interface ThemeOptions extends InsomniacTheme {}
}

// #region Global Imports
import { createGlobalStyle } from 'styled-components';
// #endregion Global Imports

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => `
    :root {
      font-size: ${theme.typography.htmlSize};
      scroll-behavior: smooth;
      box-sizing: border-box;
    }

    *, ::before, ::after {
      box-sizing: inherit;
    }

    button {
      background-color:transparent;
      color:inherit;
      border-width:0;
      padding:0;
      cursor:pointer;
    }

    img {
      display: block;
      max-width: 100%;
      width: 100%;
    }

    figure {
      margin:0;
    }

    input::-moz-focus-inner {
      border:0;
      padding:0;
      margin:0;
    }

    ul, ol, dd {
      margin:0;
      padding:0;
      list-style:none;
      padding: 1.3rem;
    }

    li {
      list-style-type: none;
      position: relative;
    }

    li::before {
      content: '•';
      position: absolute;
      left: -0.8em;      
      font-size: 1em;
    }

    h1, h2, h3, h4, h5, h6 {
      margin:0;
      font-size:inherit;
      font-weight:inherit;
    }

    cite {
      font-style:normal;
    }

    fieldset {
      border-width:0;
      padding:0;
      margin:0;
    }

    body {
      background-color: ${theme.colors.blue.lighten60};
      color: ${theme.colors.black.base};
      font-family: ${theme.typography.fontFamily};
      font-weight: ${theme.typography.fontWeightRegular};
      font-feature-settings: "lnum";
      font-size: 1.6rem;
      line-height: 2.6rem;
      margin: 0;
    }

    h1, .h1 {
      font-size: ${theme.typography.headings.h1.secondary.fontSize}rem;
      line-height: ${theme.typography.headings.h1.secondary.lineHeight}rem;
      padding: ${theme.typography.headings.h1.secondary.padding};
      max-width: ${theme.typography.headings.h1.secondary.maxWidth}rem;
      letter-spacing: ${theme.typography.headings.h1.secondary.letterSpacing}rem;
      font-weight: ${theme.typography.fontWeightBold};
      color: ${theme.colors.blue.base};

      [theme.breakpoints.down('sm')]: {
        font-size:  ${theme.typography.headings.h1.secondary.sm.fontSize}rem;
      }
    }

    h1.mainTitle {
      font-size: ${theme.typography.headings.h1.main.fontSize}rem;
      padding: ${theme.typography.headings.h1.main.padding};
      line-height: ${theme.typography.headings.h1.main.lineHeight}rem;

      [theme.breakpoints.down('sm')]: {
        font-size: ${theme.typography.headings.h1.main.sm.fontSize}rem;
      }
    }

    h2, .h2 {
      padding: 1.95rem 0;
      font-size: 2rem;
      font-weight: ${theme.typography.fontWeightBold};
      color: ${theme.colors.black.base};
    }

    h3, .h3 {
      font-size: 1.6rem;
      font-weight: ${theme.typography.fontWeightBold};
      line-height: 2.6rem;
      padding: 1.3rem 0;
      color: ${theme.colors.black.base};
    }

    p {
      margin: 0;
      line-height: 2.6rem;
      padding: 0.65rem 0 1.95rem;
    }

    a, span.link {
      color: ${theme.colors.blue.base};
      font-weight: ${theme.typography.fontWeightBold};
      text-decoration: none;

      &.sublink {
        font-weight: ${theme.typography.fontWeightRegular};
      }

      &:hover {
        text-decoration: underline;
      }
    }
  `}
`;

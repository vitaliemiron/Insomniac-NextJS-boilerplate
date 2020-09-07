/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import { theme } from '@Utils';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql',
  cache: new InMemoryCache()
});

function WebApp({ Component, pageProps }: AppProps): JSX.Element {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <Component {...pageProps} />
        </MuiThemeProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default WebApp;

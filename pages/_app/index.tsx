/* eslint-disable react/jsx-props-no-spreading */
// #region Global Imports
import * as React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
// #endregion Global Imports

// #region Local Imports
import { theme } from '@Utils';
// #endregion Local Imports

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql',
  cache: new InMemoryCache(),
});

class WebApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }

  render() {
    const { Component, pageProps } = this.props;

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
}

export default WebApp;

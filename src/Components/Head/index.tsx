import React from 'react';
import Head from 'next/head';

export const MainHead = () => {
  const title = 'Insomniac';
  return (
    <Head>
      <title>Insomniac boilerplate</title>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="The Newborn Screening Translational Research Network"
      />
      <meta name="author" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keyword"
        content="newborn, screening, translational, research, network"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="The Newborn Screening Translational Research Network"
      />
      <meta property="og:image" content="/logo.svg" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon-16x16.png"
      />
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="msapplication-config" content="/images/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

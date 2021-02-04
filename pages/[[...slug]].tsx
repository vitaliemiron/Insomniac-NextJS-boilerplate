import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { MainLayout } from '@Components';
import { initializeApollo } from '@Utils';
import { AllPagesSlugDocument } from '@Generated';

const Home = (): JSX.Element => {
  return <MainLayout />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = initializeApollo();
  const { data } = await client.query({
    query: AllPagesSlugDocument,
  });

  const paths = data.pages.nodes.map((item: { uri: string }) => {
    return {
      params: { slug: item.uri.split('/').filter((slug) => slug !== '') },
    };
  });

  paths.push({ params: { slug: [''] } });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const path =
    params?.slug && Array.isArray(params.slug) && params.slug.length > 0
      ? params.slug?.join('/')
      : '/';

  const apolloClient = await initializeApollo();

  await apolloClient.query({
    query: AllPagesSlugDocument,
    variables: { Uri: path },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};

export default Home;

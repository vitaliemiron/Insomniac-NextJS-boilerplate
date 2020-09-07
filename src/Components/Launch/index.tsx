/* eslint-disable camelcase */
import React from 'react';
import { useLaunchQuery } from '@Generated';

interface L {
  id: string;
}

export const Launch: React.FunctionComponent<L> = ({ id }): JSX.Element => {
  const { data, loading } = useLaunchQuery({ variables: { id } });
  if (loading || !data) return <div>Loading...</div>;
  return (
    <div>
      {data?.launch?.rocket?.rocket_name}
      {data?.launch?.links?.flickr_images?.map((item) => {
        return <img src={item!} key={item} alt="rocket" />;
      })}
    </div>
  );
};

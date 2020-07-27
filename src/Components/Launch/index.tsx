import React from 'react';
import { useQuery, gql } from '@apollo/client';

interface L {
  id: number;
}

const launchQuery = gql`
  query launch($id: ID!) {
    launch(id: $id) {
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
      links {
        flickr_images
      }
    }
  }
`;

export const Launch: React.FunctionComponent<L> = ({ id }): JSX.Element => {
  const { data, loading } = useQuery(launchQuery, { variables: { id } });
  if (loading || !data) return <div>Loading...</div>;
  console.log(data);
  return (
    <div>
      {data.launch.rocket.rocket_name}
      {data.launch.links.flickr_images.map((item: any) => {
        return <img src={item} key={item} />;
      })}
    </div>
  );
};

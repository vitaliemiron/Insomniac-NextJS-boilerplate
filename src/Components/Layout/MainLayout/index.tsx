import React, { useState } from 'react';
import { MainHead, Launch } from '@Components';
import { useQuery, gql } from '@apollo/client';
import { Select, MenuItem } from '@material-ui/core';
import { Global } from '@Components/Basic';

const launches = gql`
  query launches {
    launches {
      id
      mission_name
    }
  }
`;

export const MainLayout: React.FunctionComponent = (): JSX.Element => {
  const [missionId, setMissionId] = useState(Number);
  const { data, loading } = useQuery(launches);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMissionId(event.target.value as number);
  };

  if (loading || !data) return <div>Loading...</div>;
  return (
    <>
      <MainHead />
      <Select value={missionId || data.launches[0].id} onChange={handleChange}>
        {data.launches.map((launch: any) => (
          <MenuItem key={launch.id} value={launch.id}>
            {launch.mission_name}
          </MenuItem>
        ))}
      </Select>
      <Launch id={missionId || data.launches[0].id} />
      <Global />
    </>
  );
};

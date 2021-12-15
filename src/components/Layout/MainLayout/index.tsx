import React from 'react';
import { MainHead } from '@Components';
import { Global } from '@Components/basic';
import { useGetUsersQuery } from '@Generated';

export const MainLayout: React.FunctionComponent = (): JSX.Element => {
  const { data } = useGetUsersQuery();

  console.log('data', data);

  return (
    <>
      <MainHead />
      <span>Menu: </span>
      <br />
      {data?.users.map((user) => (
        <>
          <div>
            <div className="name">name: {user.name}</div>
            <div className="id">id: {user.id}</div>
            <div className="rocket"> rocket: {user.rocket} </div>
            <div className="twitter">twitt: {user.twitter}</div>
          </div>
          <hr />
        </>
      ))}
      <br />

      <Global />
    </>
  );
};

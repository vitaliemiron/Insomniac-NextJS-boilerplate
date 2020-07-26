// #region Global Imports
import * as React from 'react';
import { NextPage } from 'next';
// #endregion Global Imports

// #region Interface Importsdeclare namespace IErrorPage {
declare namespace IErrorPage {
  export interface IProps {
    statusCode?: number;
  }

  export interface InitialProps {
    namespacesRequired: string[];
  }
}
// #endregion Interface Imports

const Error: NextPage<IErrorPage.IProps, IErrorPage.InitialProps> = ({
  statusCode,
}) => {
  return (
    <div>
      Error
      {statusCode}
    </div>
  );
};

Error.getInitialProps = async ({ res, err }) => {
  let statusCode;

  if (res) {
    ({ statusCode } = res);
  } else if (err) {
    ({ statusCode } = err);
  }

  return {
    namespacesRequired: ['common'],
    statusCode,
  };
};

export default Error;

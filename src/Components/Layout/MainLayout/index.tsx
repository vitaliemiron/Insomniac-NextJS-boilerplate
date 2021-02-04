import React from 'react';
import { MainHead } from '@Components';
import { Global } from '@Components/Basic';
import { useRouter } from 'next/router';
import {
  useGeneralSettingsQuery,
  useMenusQuery,
  usePageByUriQuery,
} from '@Generated';

export const MainLayout: React.FunctionComponent = (): JSX.Element => {
  const { data } = useGeneralSettingsQuery();
  const router = useRouter();
  const { data: Menus } = useMenusQuery();
  const primaryMenu = Menus?.menus?.nodes?.find(
    (item) => item?.slug === 'primary-menu'
  )?.menuItems?.nodes;

  const { data: pageData } = usePageByUriQuery({
    variables: { Uri: router.asPath },
  });

  return (
    <>
      <MainHead />
      <div>{data?.generalSettings?.title}</div>
      <span>Menu: </span>
      <br />
      <ul>
        {primaryMenu?.map((item) => (
          <li key={item?.label}>
            <a href={item?.path}>{item?.label}</a>
          </li>
        ))}
      </ul>
      <br />
      pageTitle: {pageData?.pageBy?.title} <br />
      customField: {pageData?.pageBy?.heroTitle?.fieldGroupName}
      <Global />
    </>
  );
};

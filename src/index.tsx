import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AddOns, Layout, PersonalInfo, SelectPlan, Summary } from 'pages';
import { GlobalStyle, Theme } from 'lib/styles';
import { FormContextProvider } from 'lib/stores';
import { paths } from 'lib/constants';

export const routes = [
  {
    path: paths.detailInfo,
    element: <PersonalInfo />
  },
  {
    path: paths.selectPlan,
    element: <SelectPlan />
  },
  {
    path: paths.addOns,
    element: <AddOns />
  },
  {
    path: paths.summary,
    element: <Summary />
  }
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: routes.map(({ path, element }) => ({ path, element }))
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Theme>
    <GlobalStyle />
    <React.StrictMode>
      <FormContextProvider>
        <RouterProvider router={router} />
      </FormContextProvider>
    </React.StrictMode>
  </Theme>
);

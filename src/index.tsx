import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AddOns, Layout, PersonalInfo, SelectPlan, Summary } from 'pages';
import 'index.scss';

const routes = [
  {
    path: '/personal-detail',
    element: <PersonalInfo />
  },
  {
    path: '/select-plan',
    element: <SelectPlan />
  },
  {
    path: '/pick-add-ons',
    element: <AddOns />
  },
  {
    path: '/summary',
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
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

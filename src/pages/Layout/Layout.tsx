import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Stepper } from 'lib/components';

export const Layout: FC = () => (
  <>
    <Stepper />
    <Outlet />
  </>
);

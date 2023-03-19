import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Stepper } from 'lib/components/Stepper';

export const Layout: FC = () => (
  <>
    <Stepper />
    <Outlet />
  </>
);

import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Card } from 'lib/components/UI';
import { Stepper } from 'lib/components/Stepper';

export const Layout: FC = () => (
  <>
    <Card>
      <Stepper />
      <Outlet />
    </Card>
  </>
);

import { FC, useContext } from 'react';
import { FormContext } from 'lib/stores';

export const Summary: FC = () => {
  const { formData } = useContext(FormContext);

  return <>{console.log(formData)}</>;
};

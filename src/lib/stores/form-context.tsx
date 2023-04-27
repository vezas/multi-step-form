import { createContext, FC, useState, Dispatch, SetStateAction, ReactNode } from 'react';
import { IDataForm } from 'lib/types';

interface IFormContext {
  setFormData: Dispatch<SetStateAction<IDataForm>>;
  formData: IDataForm;
}

export const FormContext = createContext<IFormContext>({
  setFormData: () => {
    return;
  },
  formData: {
    name: '',
    email: '',
    phone: '',
    plan: '',
    yearlySubscription: false,
    adds: {
      onlineServices: false,
      largerStorage: false,
      customizableProfile: false
    }
  }
});

interface FormContextProviderProps {
  children: ReactNode;
}

export const FormContextProvider: FC<FormContextProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    yearlySubscription: false,
    adds: {
      onlineServices: false,
      largerStorage: false,
      customizableProfile: false
    }
  });

  const value = {
    setFormData,
    formData
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

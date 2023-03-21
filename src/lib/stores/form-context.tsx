import { createContext, FC, useState, Dispatch, SetStateAction, ReactNode } from 'react';

interface IFormContext {
  monthly: boolean;
  setMonthly: Dispatch<SetStateAction<boolean>>;
}

export const FormContext = createContext<IFormContext>({
  monthly: true,
  setMonthly: () => {
    return;
  }
});

interface FormContextProviderProps {
  children: ReactNode;
}

export const FormContextProvider: FC<FormContextProviderProps> = ({ children }) => {
  const [monthly, setMonthly] = useState(true);

  const value = {
    monthly,
    setMonthly
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

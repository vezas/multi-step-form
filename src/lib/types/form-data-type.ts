export interface IDataForm {
  name: string;
  email: string;
  phone: string;
  plan: string;
  yearlySubscription: boolean;
  adds: {
    onlineServices: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
  };
}

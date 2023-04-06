export interface UserApiReponse {
  id: string;
  login: string;
  role?: string;
  email: string;
  description: string;
  photo: string;
  Address: IAddress;
  Passport: IPassport;
  FIO: IFio;
  Common: ICommon;
}

export type OperatorsPermissions = OperPerm[];

export interface OperPerm {
  id: number;
  login: string;
  Address: boolean;
  Passport: boolean;
  UserName: boolean;
  Common: boolean;
  firstName?: string;
  secondName?: string;
  lastName?: string;
}

export interface IAddress {
  city: string;
  country: string;
  area: string;
  mailindex: string;
  street: string;
  houseNum: string;
  flat: string;
}

export interface IPassport {
  number: string;
  series: string;
  issuedBy: string;
  issuedWhen: string;
}

export interface IFio {
  firstName: string;
  secondName: string;
  lastName: string;
}

export interface ICommon {
  phoneNumber: string;
  dateOfBirth: string;
}

export type UserData = IAddress | ICommon | IFio | IPassport;

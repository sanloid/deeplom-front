export interface UserApiReponse {
  login: string;
  role: string;
  Adress: IAdress;
  Passport: IPassport;
  FIO: IFio;
  Common: ICommon;
}

export interface IAdress {
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

export type UserData = IAdress | ICommon | IFio | IPassport;

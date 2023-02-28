export interface UserAPIType {
  id: string;
  login: string;
  password: string;
  //common
  firstName: string;
  secondName: string;
  lastName: string;
  gender: string;
  role: string;
  phoneNumber: string;
  dateOfBirth: Date;
  //adress
  country: string;
  city: string;
  area: string;
  street: string;
  houseNum: string;
  flat: string;
  //passport
  series: string;
  pasportNum: string;
  issuedBy: string;
  placeOfRegistration: string;
  dateOfIssue: Date;
}

export interface UpdatePermissionDto {
  operatorId: number;
  permission: string;
  value: boolean;
}

export enum DataType {
  ADDRESS = "ADDRESS",
  COMMON = "COMMON",
  USERNAME = "USERNAME",
  PASSPORT = "PASSPORT",
}
export interface SendRequestToUserDataDTO {
  userId: string;
  datatype: DataType;
}

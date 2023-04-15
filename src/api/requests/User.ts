import { UpdatePermissionDto } from "../../types/UserApiRequest";
import {
  IAddress,
  ICommon,
  IFio,
  IPassport,
  OperatorsPermissions,
} from "../../types/UserApiResponse";
import axios from "../axios";
import env from "../env";

export default {
  async getOne(id: number): Promise<any> {
    const response = axios.get(`users/${id}`);
    return response.then((e) => {
      return e.data;
    });
  },
  async updateAddress(id: number, updateAddressDto: IAddress): Promise<any> {
    const response = await axios.patch(`users/address/${id}`, {
      ...updateAddressDto,
    });
    return response.data;
  },
  async updateCommon(id: number, updateCommonDto: ICommon): Promise<any> {
    const body = {
      ...updateCommonDto,
      dateOfBirth: new Date(updateCommonDto.dateOfBirth).toISOString(),
    };
    const response = await axios.patch(`users/common/${id}`, { ...body });
    return response.data;
  },
  async updateFIO(id: number, updateFIODto: IFio): Promise<any> {
    const response = await axios.patch(`users/fio/${id}`, {
      ...updateFIODto,
    });
    return response.data;
  },
  async updatePassport(id: number, updatePassportDto: IPassport): Promise<any> {
    const body = {
      ...updatePassportDto,
      issuedWhen: new Date(updatePassportDto.issuedWhen).toISOString(),
    };
    const response = await axios.patch(`users/passport/${id}`, { ...body });
    return response.data;
  },
  async getOperatorsPermission(id: number): Promise<OperatorsPermissions> {
    const response = await axios.get(`users/operators/${id}`);
    return response.data;
  },
  async updateOperatorPermission(
    id: number,
    updatePermissionDto: UpdatePermissionDto
  ): Promise<any> {
    const response = await axios.patch(`users/permission/${id}`, {
      ...updatePermissionDto,
    });
    return response.data;
  },
  async updateProfilePhoto(file: File, id: number): Promise<any> {
    const formData = new FormData();
    formData.append("photo", file);
    const upload = await axios({
      url: `/users/uploadphoto/${id}`,
      method: "patch",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    });
  },
  async getProfile(id: number): Promise<any> {
    const response = await axios.get(`users/profile/${id}`);
    return response.data;
  },
};

import React from "react";
import UserDataStore from "../../store/UserDataStore";
import FormBase from "../FormBase";
import User from "../../api/requests/User";
import * as Yup from "yup";
import { IFio, UserData } from "../../types/UserApiResponse";

const FioForm: React.FC = () => {
  const submit = async (values: UserData) => {
    await User.updateFIO(UserDataStore.getDecodedAccessToken().id, {
      ...values,
    } as IFio);
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("Имя")
      .min(2, "Too Short!")
      .max(50, "Too Long!"),
    lastName: Yup.string()
      .required("Фамилия")
      .min(2, "Too Short!")
      .max(50, "Too Long!"),
    secondName: Yup.string()
      .required("Отчество")
      .min(2, "Too Short!")
      .max(50, "Too Long!"),
  });

  const fields = [
    {
      name: "firstName",
      label: "Имя",
      placeholder: "Имя",
      type: "text",
      value: UserDataStore.oneResponse?.FIO
        ? UserDataStore.oneResponse.FIO.firstName
        : "",
    },
    {
      name: "lastName",
      label: "Фамилия",
      type: "text",
      placeholder: "Фамилия",
      value: UserDataStore.oneResponse?.FIO
        ? UserDataStore.oneResponse.FIO.lastName
        : "",
    },
    {
      name: "secondName",
      label: "Отчество",
      type: "text",
      placeholder: "Отчество",
      value: UserDataStore.oneResponse?.FIO
        ? UserDataStore.oneResponse.FIO.secondName
        : "",
    },
  ];

  let initialValues = {};
  fields.forEach((e) => {
    initialValues = Object.assign(initialValues, { [e.name]: e.value });
  });
  return (
    <FormBase
      initialValues={initialValues as UserData}
      submit={submit}
      fields={fields}
      validation={validationSchema}
    />
  );
};

export default FioForm;

import React from "react";
import UserDataStore from "../../store/UserDataStore";
import FormBase from "../FormBase";
import User from "../../api/requests/User";
import * as Yup from "yup";
import { ICommon, UserData } from "../../types/UserApiResponse";

const CommonForm: React.FC = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const submit = async (values: UserData) => {
    console.log(values);
    // @ts-ignore
    const isoDate = new Date(values.dateOfBirth).toISOString();
    console.log(isoDate);
    await User.updateCommon(UserDataStore.getDecodedAccessToken().id, {
      ...values,
      dateOfBirth: isoDate,
    } as ICommon);
  };

  const validationSchema = Yup.object({
    phoneNumber: Yup.string()
      .required("Введите номер телефона")
      .matches(phoneRegExp, "Phone number is not valid"),
    dateOfBirth: Yup.string()
      .required("Дата рождения")
      .min(2, "Too Short!")
      .max(50, "Too Long!"),
  });

  const fields = [
    {
      name: "phoneNumber",
      label: "Номер телефона",
      type: "text",
      placeholder: "Номер телефона",
      value: UserDataStore.oneResponse?.Common
        ? UserDataStore.oneResponse.Common.phoneNumber
        : "",
    },
    {
      name: "dateOfBirth",
      label: "Дата рождения",
      type: "date",
      placeholder: "Дата рождения",
      value: UserDataStore.oneResponse?.Common
        ? UserDataStore.oneResponse.Common.dateOfBirth
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

export default CommonForm;

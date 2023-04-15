import React from "react";
import UserDataStore from "../../store/UserDataStore";
import FormBase from "../FormBase";
import User from "../../api/requests/User";
import * as Yup from "yup";
import { IPassport, UserData } from "../../types/UserApiResponse";

const PassportForm: React.FC = () => {
  const submit = async (values: UserData) => {
    // @ts-ignore
    const isoDate = new Date(values.issuedWhen).toISOString();
    await User.updatePassport(UserDataStore.getDecodedAccessToken().id, {
      ...values,
      // @ts-ignore
      number: String(values.number),
      // @ts-ignore
      series: String(values.series),
      issuedWhen: isoDate,
    } as IPassport);
  };

  const validationSchema = Yup.object().shape({
    number: Yup.number()
      .required("Введите номер")
      .test(
        "len",
        "Неверная длина номера",
        (val) => !!val && val.toString().length === 4
      ),
    series: Yup.number()
      .required("Введите серию")
      .test(
        "len",
        "Неверная длина серии",
        (val) => !!val && val.toString().length === 6
      ),
    issuedBy: Yup.string()
      .required("Кем выдан")
      .min(2, "Too Short!")
      .max(50, "Too Long!"),
    issuedWhen: Yup.string()
      .required("Дата выдачи")
      .min(2, "Too Short!")
      .max(50, "Too Long!"),
  });

  const fields = [
    {
      name: "number",
      label: "Номер",
      type: "number",
      placeholder: "Номер паспорта",
      value: UserDataStore.oneResponse?.Passport
        ? UserDataStore.oneResponse.Passport.number
        : "",
    },
    {
      name: "series",
      label: "Серия",
      type: "number",
      placeholder: "Серия паспорта",
      value: UserDataStore.oneResponse?.Passport
        ? UserDataStore.oneResponse.Passport.series
        : "",
    },
    {
      name: "issuedBy",
      label: "Кем выдан",
      type: "text",
      placeholder: "Кем выдан паспорт",
      value: UserDataStore.oneResponse?.Passport
        ? UserDataStore.oneResponse.Passport.issuedBy
        : "",
    },
    {
      name: "issuedWhen",
      label: "Когда выдан",
      type: "date",
      placeholder: "Когда выдан паспорт",
      rules: "required|string|between:Введите номер",
      value: UserDataStore.oneResponse?.Passport
        ? UserDataStore.oneResponse.Passport.issuedWhen
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

export default PassportForm;

import React from "react";
import UserDataStore from "../../store/UserDataStore";
import User from "../../api/requests/User";
import { IAddress, UserData } from "../../types/UserApiResponse";
import * as Yup from "yup";
import FormBase from "../FormBase";

const AddressForm: React.FC = () => {
  const submit = async (values: UserData) => {
    console.log(values);
    await User.updateAddress(
      UserDataStore.getDecodedAccessToken().id,
      values as IAddress
    );
  };

  const validationSchema = Yup.object({
    city: Yup.string()
      .required("Введите город")
      .min(2, "Too Short!")
      .max(50, "Too Long!"),
    country: Yup.string()
      .required("Введите страну")
      .min(2, "Too Short!")
      .max(50, "Too Long!"),
    area: Yup.string()
      .required("Введите область")
      .min(2, "Too Short!")
      .max(50, "Too Long!"),
    mailindex: Yup.string()
      .required("Введите почтовый индекс")
      .min(2, "Too Short!")
      .max(50, "Too Long!"),
    street: Yup.string()
      .required("Введите улицу")
      .min(2, "Too Short!")
      .max(50, "Too Long!"),
    houseNum: Yup.string().required("Введите номер дома").max(4, "Too Long!"),
    flat: Yup.string().required("Введите номер квартиры").max(4, "Too Long!"),
  });

  const fields = [
    {
      name: "city",
      label: "Город",
      type: "text",
      placeholder: "Ваш город",
      value: UserDataStore.oneResponse?.Address
        ? UserDataStore.oneResponse?.Address.city
        : "",
    },
    {
      name: "country",
      label: "Страна",
      type: "text",
      placeholder: "Страна проживания",
      value: UserDataStore.oneResponse?.Address
        ? UserDataStore.oneResponse?.Address.country
        : "",
    },
    {
      name: "area",
      label: "Область",
      type: "text",
      placeholder: "Область проживания",
      value: UserDataStore.oneResponse?.Address
        ? UserDataStore.oneResponse?.Address.area
        : "",
    },
    {
      name: "mailindex",
      label: "Почтовый индекс",
      type: "text",
      placeholder: "почтовый индекс",
      value: UserDataStore.oneResponse?.Address
        ? UserDataStore.oneResponse?.Address.mailindex
        : "",
    },
    {
      name: "street",
      label: "Улица",
      type: "text",
      placeholder: "улица",
      value: UserDataStore.oneResponse?.Address
        ? UserDataStore.oneResponse?.Address.street
        : "",
    },
    {
      name: "houseNum",
      label: "Номер дома",
      type: "text",
      placeholder: "номер дома",
      value: UserDataStore.oneResponse?.Address
        ? UserDataStore.oneResponse?.Address.houseNum
        : "",
    },
    {
      name: "flat",
      label: "Номер квартиры",
      placeholder: "квартира",
      type: "text",
      value: UserDataStore.oneResponse?.Address
        ? UserDataStore.oneResponse?.Address.flat
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

export default AddressForm;

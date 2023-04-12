import React from "react";
import { plugins } from "../formcfg";
import UserDataStore from "../../store/UserDataStore";
// @ts-ignore
import MobxReactForm from "mobx-react-form";
import FormBase from "../FormBase";
import User from "../../api/requests/User";

const AddressForm: React.FC = () => {
  const hooks = {
    // @ts-ignore
    async onSuccess(form) {
      await User.updateAddress(
        UserDataStore.getDecodedAccessToken().id,
        form.values()
      );
    },
    // @ts-ignore
    onSubmit(form) {},
    // @ts-ignore
    onError(form) {},
  };

  const fields = [
    {
      name: "city",
      label: "Город",
      placeholder: "Ваш город",
      rules: "required|string|between:5,25",
      value: UserDataStore.oneResponse?.Address
        ? UserDataStore.oneResponse?.Address.city
        : "",
    },
    {
      name: "country",
      label: "Страна",
      placeholder: "Страна проживания",
      rules: "required|string|between:5,25",
      value: UserDataStore.oneResponse?.Address
        ? UserDataStore.oneResponse?.Address.country
        : "",
    },
    {
      name: "area",
      label: "Область",
      placeholder: "Область проживания",
      rules: "required|string|between:6,6",
      value: UserDataStore.oneResponse?.Address
        ? UserDataStore.oneResponse?.Address.area
        : "",
    },
    {
      name: "mailindex",
      label: "Почтовый индекс",
      placeholder: "почтовый индекс",
      rules: "required|string|between:6,6",
      value: UserDataStore.oneResponse?.Address
        ? UserDataStore.oneResponse?.Address.mailindex
        : "",
    },
    {
      name: "street",
      label: "Улица",
      placeholder: "улица",
      rules: "required|string|between:5,25",
      value: UserDataStore.oneResponse?.Address
        ? UserDataStore.oneResponse?.Address.street
        : "",
    },
    {
      name: "houseNum",
      label: "Номер дома",
      placeholder: "номер дома",
      rules: "required|string|between:1,4",
      value: UserDataStore.oneResponse?.Address
        ? UserDataStore.oneResponse?.Address.houseNum
        : "",
    },
    {
      name: "flat",
      label: "Номер квартиры",
      placeholder: "квартира",
      rules: "required|string|between:1,4",
      value: UserDataStore.oneResponse?.Address
        ? UserDataStore.oneResponse?.Address.flat
        : "",
    },
  ];
  const addressForm = new MobxReactForm({ fields }, { plugins, hooks });
  return <FormBase fields={fields} renderForm={addressForm} />;
};

export default AddressForm;

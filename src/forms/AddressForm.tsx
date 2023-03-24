import React from "react";
import { hooks, plugins } from "./formcfg";
import UserDataStore from "../store/UserDataStore";
import MobxReactForm from "mobx-react-form";
import FormBase from "./FormBase";

const AdressForm: React.FC = () => {
  const fields = [
    {
      name: "city",
      label: "Город",
      placeholder: "Ваш город",
      rules: "required|string|between:5,25",
      value: UserDataStore.oneResponse?.Adress.city || null,
    },
    {
      name: "country",
      label: "Страна",
      placeholder: "Страна проживания",
      rules: "required|string|between:5,25",
      value: UserDataStore.oneResponse?.Adress.country || null,
    },
    {
      name: "area",
      label: "Область",
      placeholder: "Область проживания",
      rules: "required|string|between:6,6",
      value: UserDataStore.oneResponse?.Adress.area || null,
    },
    {
      name: "mailindex",
      label: "Почтовый индекс",
      placeholder: "почтовый индекс",
      rules: "required|string|between:6,6",
      value: UserDataStore.oneResponse?.Adress.mailindex || null,
    },
    {
      name: "street",
      label: "Улица",
      placeholder: "улица",
      rules: "required|string|between:5,25",
      value: UserDataStore.oneResponse?.Adress.street || null,
    },
    {
      name: "houseNum",
      label: "Номер дома",
      placeholder: "номер дома",
      rules: "required|string|between:1,4",
      value: UserDataStore.oneResponse?.Adress.houseNum || null,
    },
    {
      name: "flat",
      label: "Номер квартиры",
      placeholder: "квартира",
      rules: "required|string|between:1,4",
      value: UserDataStore.oneResponse?.Adress.flat || null,
    },
  ];
  const addressForm = new MobxReactForm({ fields }, { plugins, hooks });
  return <FormBase fields={fields} renderForm={addressForm} />;
};

export default AdressForm;

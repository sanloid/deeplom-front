import React from "react";
import { hooks, plugins } from "../formcfg";
import UserDataStore from "../../store/UserDataStore";
import MobxReactForm from "mobx-react-form";
import FormBase from "../FormBase";

const PassportForm: React.FC = () => {
  const fields = [
    {
      name: "number",
      label: "Номер",
      placeholder: "Номер паспорта",
      rules: "required|string|between:5,25",
      value: UserDataStore.oneResponse?.Passport.number || null,
    },
    {
      name: "series",
      label: "Серия",
      placeholder: "Серия паспорта",
      rules: "required|string|between:5,25",
      value: UserDataStore.oneResponse?.Passport.series || null,
    },
    {
      name: "issuedBy",
      label: "Кем выдан",
      placeholder: "Кем выдан паспорт",
      rules: "required|string|between:5,25",
      value: UserDataStore.oneResponse?.Passport.issuedBy || null,
    },
    {
      name: "issuedWhen",
      label: "Когда выдан",
      placeholder: "Когда выдан паспорт",
      rules: "required|string|between:5,25",
      value: UserDataStore.oneResponse?.Passport.issuedWhen || null,
    },
  ];
  const passportForm = new MobxReactForm({ fields }, { plugins, hooks });
  return <FormBase fields={fields} renderForm={passportForm} />;
};

export default PassportForm;

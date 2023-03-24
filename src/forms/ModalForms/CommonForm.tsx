import React from "react";
import { hooks, plugins } from "../formcfg";
import UserDataStore from "../../store/UserDataStore";
import MobxReactForm from "mobx-react-form";
import FormBase from "../FormBase";

const CommonForm: React.FC = () => {
  const fields = [
    {
      name: "phoneNumber",
      label: "Номер телефона",
      placeholder: "Номер телефона",
      rules: "required|string|between:5,25",
      value: UserDataStore.oneResponse?.Common.phoneNumber || null,
    },
    {
      name: "dateOfBirth",
      label: "Дата рождения",
      placeholder: "Дата рождения",
      rules: "required|string|between:5,25",
      value: UserDataStore.oneResponse?.Common.dateOfBirth || null,
    },
  ];
  const CommonForm = new MobxReactForm({ fields }, { plugins, hooks });
  return <FormBase fields={fields} renderForm={CommonForm} />;
};

export default CommonForm;

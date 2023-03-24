import React from "react";
import { hooks, plugins } from "../formcfg";
import UserDataStore from "../../store/UserDataStore";
import MobxReactForm from "mobx-react-form";
import FormBase from "../FormBase";

const FioForm: React.FC = () => {
  const fields = [
    {
      name: "firstName",
      label: "Имя",
      placeholder: "Имя",
      rules: "required|string|between:5,25",
      value: UserDataStore.oneResponse?.FIO.firstName || null,
    },
    {
      name: "lastName",
      label: "Фамилия",
      placeholder: "Фамилия",
      rules: "required|string|between:5,25",
      value: UserDataStore.oneResponse?.FIO.lastName || null,
    },
    {
      name: "secondName",
      label: "Отчество",
      placeholder: "Отчество",
      rules: "required|string|between:5,25",
      value: UserDataStore.oneResponse?.FIO.secondName || null,
    },
  ];
  const fioForm = new MobxReactForm({ fields }, { plugins, hooks });
  return <FormBase fields={fields} renderForm={fioForm} />;
};

export default FioForm;

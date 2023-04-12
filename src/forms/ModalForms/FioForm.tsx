import React from "react";
import { plugins } from "../formcfg";
import UserDataStore from "../../store/UserDataStore";
// @ts-ignore
import MobxReactForm from "mobx-react-form";
import FormBase from "../FormBase";
import User from "../../api/requests/User";

const FioForm: React.FC = () => {
  const hooks = {
    // @ts-ignore
    onSuccess(form) {
      User.updateFIO(UserDataStore.getDecodedAccessToken().id, form.values());
    },
    // @ts-ignore
    onSubmit(form) {},
    // @ts-ignore
    onError(form) {},
  };
  const fields = [
    {
      name: "firstName",
      label: "Имя",
      placeholder: "Имя",
      rules: "required|string|between:5,25",
      value: UserDataStore.oneResponse?.FIO
        ? UserDataStore.oneResponse.FIO.firstName
        : "",
    },
    {
      name: "lastName",
      label: "Фамилия",
      placeholder: "Фамилия",
      rules: "required|string|between:5,25",
      value: UserDataStore.oneResponse?.FIO
        ? UserDataStore.oneResponse.FIO.lastName
        : "",
    },
    {
      name: "secondName",
      label: "Отчество",
      placeholder: "Отчество",
      rules: "required|string|between:5,25",
      value: UserDataStore.oneResponse?.FIO
        ? UserDataStore.oneResponse.FIO.secondName
        : "",
    },
  ];
  const fioForm = new MobxReactForm({ fields }, { plugins, hooks });
  return <FormBase fields={fields} renderForm={fioForm} />;
};

export default FioForm;

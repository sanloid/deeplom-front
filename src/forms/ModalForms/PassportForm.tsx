import React from "react";
import { plugins } from "../formcfg";
import UserDataStore from "../../store/UserDataStore";
// @ts-ignore
import MobxReactForm from "mobx-react-form";
import FormBase from "../FormBase";
import User from "../../api/requests/User";

const PassportForm: React.FC = () => {
  const hooks = {
    // @ts-ignore
    onSuccess(form) {
      User.updatePassport(
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
      name: "number",
      label: "Номер",
      placeholder: "Номер паспорта",
      rules: "required|string|between:5,25",
      value: UserDataStore.oneResponse?.Passport
        ? UserDataStore.oneResponse.Passport.number
        : "",
    },
    {
      name: "series",
      label: "Серия",
      placeholder: "Серия паспорта",
      rules: "required|string|between:5,25",
      value: UserDataStore.oneResponse?.Passport
        ? UserDataStore.oneResponse.Passport.series
        : "",
    },
    {
      name: "issuedBy",
      label: "Кем выдан",
      placeholder: "Кем выдан паспорт",
      rules: "required|string|between:5,25",
      value: UserDataStore.oneResponse?.Passport
        ? UserDataStore.oneResponse.Passport.issuedBy
        : "",
    },
    {
      name: "issuedWhen",
      label: "Когда выдан",
      placeholder: "Когда выдан паспорт",
      type: "date",
      rules: "required|string|between:5,25",
      value: UserDataStore.oneResponse?.Passport
        ? UserDataStore.oneResponse.Passport.issuedWhen
        : "",
    },
  ];
  const passportForm = new MobxReactForm({ fields }, { plugins, hooks });
  return <FormBase fields={fields} renderForm={passportForm} />;
};

export default PassportForm;

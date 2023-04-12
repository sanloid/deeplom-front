import React from "react";
import { plugins } from "../formcfg";
import UserDataStore from "../../store/UserDataStore";
// @ts-ignore
import MobxReactForm from "mobx-react-form";
import FormBase from "../FormBase";
import User from "../../api/requests/User";

const CommonForm: React.FC = () => {
  const hooks = {
    // @ts-ignore
    onSuccess(form) {
      User.updateCommon(
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
      name: "phoneNumber",
      label: "Номер телефона",
      type: "text",
      placeholder: "Номер телефона",
      rules: "required|string|between:5,25",
      value: UserDataStore.oneResponse?.Common
        ? UserDataStore.oneResponse.Common.phoneNumber
        : "",
    },
    {
      name: "dateOfBirth",
      label: "Дата рождения",
      type: "date",
      placeholder: "Дата рождения",
      rules: "required|string|between:5,25",
      value: UserDataStore.oneResponse?.Common
        ? UserDataStore.oneResponse.Common.dateOfBirth
        : "",
    },
  ];
  const CommonForm = new MobxReactForm({ fields }, { plugins, hooks });
  return <FormBase fields={fields} renderForm={CommonForm} />;
};

export default CommonForm;

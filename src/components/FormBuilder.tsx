import React, { useState } from "react";
import MobxReactForm from "mobx-react-form";
import FormInput from "./UI/FormInput";
import { Adressfields } from "../form/formFieldsRule/AdressFormRule";
import { hooks, plugins } from "../form";
import { Commonfields } from "../form/formFieldsRule/CommonFormRule";
import { Passportfields } from "../form/formFieldsRule/PassportFormRule";

export interface IFormBuilder {
  form: MobxReactForm;
  formLabel: string;
  rules: any;
}

const FormBuilder = ({ form, formLabel, rules }: IFormBuilder) => {
  return () => {
    return (
      <div className="w-full flex flex-wrap m-4">
        <div className="p-4 w-full">
          <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
            <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
              {formLabel}
            </h1>
            {Object.keys(rules).map((e) => (
              <div className="flex items-center text-gray-600 mb-2" key={e}>
                <FormInput form={form} paramName={e} />
              </div>
            ))}
            <button
              onClick={form.onSubmit}
              className="flex items-center mt-auto text-white bg-blue-600 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-500 rounded"
            >
              Сохранить
            </button>
          </div>
          <p>{form.error}</p>
        </div>
      </div>
    );
  };
};

export const AdressForm = FormBuilder({
  form: new MobxReactForm({ fields: Adressfields }, { plugins, hooks }),
  rules: Adressfields,
  formLabel: "Адрес",
});

export const CommonForm = FormBuilder({
  form: new MobxReactForm({ fields: Commonfields }, { plugins, hooks }),
  rules: Commonfields,
  formLabel: "Общее",
});

export const PassportForm = FormBuilder({
  form: new MobxReactForm({ fields: Passportfields }, { plugins, hooks }),
  rules: Passportfields,
  formLabel: "Паспорт",
});

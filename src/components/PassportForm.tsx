import React from "react";
import MobxReactForm from "mobx-react-form";
import { Passportfields } from "../form/formFieldsRule/PassportFormRule";
import FormInput from "./UI/FormInput";
import { hooks, plugins } from "../form";
import { observer } from "mobx-react-lite";

const PassportForm = observer(() => {
  const form = new MobxReactForm(
    { fields: Passportfields },
    { plugins, hooks }
  );
  return (
    <div className="w-full flex flex-wrap m-4">
      <div className="p-4 w-full">
        <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
            Паспорт
          </h1>
          {Passportfields.map((e) => (
            <div className="flex items-center text-gray-600 mb-2" key={e.name}>
              <FormInput form={form} paramName={e.name} />
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
});

export default PassportForm;

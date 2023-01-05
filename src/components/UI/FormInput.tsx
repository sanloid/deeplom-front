import React, { useState } from "react";
import UserDataStore from "../../store/UserDataStore";
import MobxReactForm from "mobx-react-form";
import { observer } from "mobx-react-lite";

export interface IFormInput {
  form: MobxReactForm;
  paramName: string;
}

const FormInput: React.FC<IFormInput> = observer(({ paramName, form }) => {
  const [value, setValue] = useState("");
  return (
    <div className="flex justify-center m-2">
      <div className="mb-3 xl:w-96">
        <div className="form-label inline-block mb-2 text-gray-700">
          {form.$(paramName).label}
        </div>
        <p>{form.$(paramName).error}</p>
        <input
          {...form.$(paramName).bind()}
          // value={form.value}
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
      </div>
    </div>
  );
});

export default FormInput;

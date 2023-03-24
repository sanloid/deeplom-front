import { observer } from "mobx-react-lite";
import React from "react";

export interface IFormInput {
  field: any;
  type?: string;
  placeholder?: any;
}

const FormInput: React.FC<IFormInput> = ({
  field,
  type = "text",
  placeholder = null,
}) => {
  const inputStyle =
    "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2";
  return (
    <div className="border-2 rounded-xl mb-5 p-2 flex justify-between">
      <label htmlFor={field.id} className="w-1/2">
        {field.label}
      </label>
      <input
        {...field.bind({ type, placeholder })}
        className="w-1/2 focus:outline-none"
      />
      <small className="">{field.error}</small>
    </div>
  );
};

export default observer(FormInput);

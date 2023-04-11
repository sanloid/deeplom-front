import { observer } from "mobx-react-lite";
import React from "react";

export interface IFormInput {
  field: any;
  type?: string;
  placeholder?: any;
}

const FormInput: React.FC<IFormInput> = ({
  field,
  type,
  placeholder = null,
}) => {
  return (
    <div className="border-2 dark:border-gray-800 rounded-xl mb-5 p-2 flex justify-between">
      <label htmlFor={field.id} className="w-1/2">
        {field.label}
      </label>
      <input
        type={type ? type : "text"}
        {...field.bind({ type, placeholder })}
        className="w-1/2 focus:outline-none rounded-full py-2 px-4 dark:bg-gray-500 dark:placeholder:text-gray-600"
      />
      <small className="">{field.error}</small>
    </div>
  );
};

export default observer(FormInput);

import React from "react";
import { IFormInput } from "./FormInput";

const DatePicker: React.FC<IFormInput> = ({ name, paramName }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="datepicker relative form-floating mb-3 xl:w-96"
        data-mdb-toggle-button="false"
      >
        <div className="form-label inline-block mb-2 text-gray-700">{name}</div>
        <input
          type="date"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default DatePicker;

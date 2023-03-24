import React from "react";
import FormInput from "../components/UI/FormInput";

export interface IFormBase {
  fields: IFormField[];
  renderForm: any;
}

interface IFormField {
  name: string;
  label: string;
  placeholder: string;
  rules: string;
  value: any;
}

const FormBase: React.FC<IFormBase> = ({ fields, renderForm }) => {
  return (
    <div className="p-10">
      <form onSubmit={renderForm.onSubmit}>
        {fields.map((e) => (
          <FormInput key={e.name} field={renderForm.$(e.name)} />
        ))}
        <br />
        <button
          type="submit"
          className="green-btn"
          onClick={renderForm.onSubmit}
        >
          Submit
        </button>
        <button
          type="button"
          className="yellow-btn"
          onClick={renderForm.onClear}
        >
          Clear
        </button>
        <button type="button" className="red-btn" onClick={renderForm.onReset}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default FormBase;

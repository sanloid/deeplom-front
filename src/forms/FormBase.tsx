import React from "react";
import FormInput from "./FormInput";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import UserDataStore from "../store/UserDataStore";
import { observer } from "mobx-react-lite";

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
  const [loading, setLoading] = React.useState(false);

  if (!loading)
    return (
      <div className="p-10">
        <form
          onSubmit={async () => {
            await renderForm.onSubmit(setLoading);
            await UserDataStore.getOne();
          }}
        >
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
          <button
            type="button"
            className="red-btn"
            onClick={renderForm.onReset}
          >
            Reset
          </button>
        </form>
      </div>
    );
  return <LoadingSpinner />;
};

export default observer(FormBase);

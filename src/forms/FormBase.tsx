import React from "react";
import { observer } from "mobx-react-lite";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { UserData } from "../types/UserApiResponse";

export interface IFormBase {
  initialValues: UserData;
  submit: (values: UserData) => Promise<void>;
  validation: any;
  fields: {
    name: string;
    label: string;
    type: string;
    placeholder: string;
    value: string;
  }[];
}

const FormBase: React.FC<IFormBase> = ({
  initialValues,
  fields,
  submit,
  validation,
}) => {
  return (
    <div className="p-10">
      <Formik
        initialValues={initialValues as UserData}
        onSubmit={(values) => submit(values)}
        validationSchema={validation}
      >
        <Form>
          {fields.map((field) => (
            <div key={field.label + field.name}>
              <div className="border-2 dark:border-gray-800 rounded-xl mb-5 p-2 flex justify-between">
                <span className="flex text-center">{field.label}</span>
                <Field
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="w-1/2 focus:outline-none rounded-full py-2 px-4 dark:bg-gray-500 dark:placeholder:text-gray-600"
                />
              </div>
              <div className="bg-red-500 rounded-xl m-5">
                <ErrorMessage name={field.name} className="p-5" />
              </div>
            </div>
          ))}
          <div className="flex justify-between mx-10">
            <button type="submit" className="green-btn">
              Submit
            </button>
            <button type="reset" className="yellow-btn">
              Reset
            </button>
          </div>
        </Form>
      </Formik>
      <br />
    </div>
  );
};

export default observer(FormBase);

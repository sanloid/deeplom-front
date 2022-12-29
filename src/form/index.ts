import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";

export const plugins = {
  dvr: dvr(validatorjs),
};

export const hooks = {
  onSuccess(form) {
    // alert("Form is valid! Send the request here.");
    // get field values
    console.log("Form Values!", form.values());
  },
  onError(form) {
    // alert("Form has errors!");
    // get all form errors
    console.log("All form errors", form.errors());
  },
};

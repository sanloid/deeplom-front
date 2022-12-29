import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";
import User from "../api/requests/User";

export const plugins = {
  dvr: dvr(validatorjs),
};

export const hooks = {
  onSuccess(form) {
    console.log("Form Values!", form.values());
    User.updateOne("1", form.values());
  },
  onError(form) {
    // alert("Form has errors!");
    // get all form errors
    console.log("All form errors", form.errors());
  },
};

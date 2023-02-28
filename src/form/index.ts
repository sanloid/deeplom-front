import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";
import User from "../api/requests/User";
import jwt_decode from "jwt-decode";

export const plugins = {
  dvr: dvr(validatorjs),
};

export const hooks = {
  onSuccess(form) {
    let token = localStorage.getItem("token");
    let decoded = token ? jwt_decode(token) : null;
    User.updateOne(decoded.id, form.values());
  },
  onError(form) {
    console.log("All form errors", form.errors());
  },
  onSubmit(form) {
    let token = localStorage.getItem("token");
    let decoded = token ? jwt_decode(token) : null;
    User.updateOne(decoded.id, form.values());
  },
  onInit(form) {
    // console.log("inited");
  },
};

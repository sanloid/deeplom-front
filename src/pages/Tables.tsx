import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import {
  AdressForm,
  CommonForm,
  PassportForm,
} from "../components/FormBuilder";
import UserDataStore from "../store/UserDataStore";

const Tables: React.FC = observer(() => {
  useEffect(() => {
    UserDataStore.getOne();
  }, []);

  const authenticated = UserDataStore.checkAuth();
  if (!authenticated) {
    return <Navigate replace to="/login" />;
  }

  return (
    <div className="container mx-auto flex-grow">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="px-5 py-24 mx-auto grid xl:grid-cols-3 grid-cols-1">
          <AdressForm />
          <CommonForm />
          <PassportForm />
        </div>
      </section>
    </div>
  );
});

export default Tables;

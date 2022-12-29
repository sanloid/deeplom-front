import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import AdressForm from "../components/AdressForm";
import CommonForm from "../components/CommonForm";
import PassportForm from "../components/PassportForm";
import UserDataStore from "../store/UserDataStore";

const Tables: React.FC = observer(() => {
  useEffect(() => {
    UserDataStore.getOne("1");
  }, []);

  return (
    <div className="container mx-auto flex-grow">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="px-5 py-24 mx-auto grid xl:grid-cols-3 grid-cols-1">
          <CommonForm />
          <AdressForm />
          <PassportForm />
        </div>
      </section>
    </div>
  );
});

export default Tables;

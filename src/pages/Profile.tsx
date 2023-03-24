import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import UserDataStore from "../store/UserDataStore";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { IFormInput } from "../components/UI/FormInput";
import Table from "../components/UI/Table";
import AdressForm from "../forms/AddressForm";
import { Modal } from "../components/UI/Modal";

const Profile: React.FC = () => {
  useEffect(() => {
    UserDataStore.getOne();
  }, []);

  useEffect(() => {
    UserDataStore.getOne();
  }, []);

  interface ITableContent {
    table: any;
    tableName: string;
    inputs: IFormInput[];
  }

  if (UserDataStore.oneResponse) {
    return (
      <div className="container mx-auto mb-auto">
        <Table
          table={UserDataStore.oneResponse.Adress}
          tableName={"Address"}
          children={AdressForm}
        />
      </div>
    );
  }
  return <LoadingSpinner />;
};

export default observer(Profile);

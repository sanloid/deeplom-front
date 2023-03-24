import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import UserDataStore from "../store/UserDataStore";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { IFormInput } from "../components/UI/FormInput";
import Table from "../components/UI/Table";
import AdressForm from "../forms/ModalForms/AddressForm";
import CommonForm from "../forms/ModalForms/CommonForm";
import FioForm from "../forms/ModalForms/FioForm";
import PassportForm from "../forms/ModalForms/PassportForm";

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

  const tableRows = [
    {
      table: UserDataStore.oneResponse?.Adress,
      tableName: "Address",
      children: AdressForm,
    },
    {
      table: UserDataStore.oneResponse?.Common,
      tableName: "Common",
      children: CommonForm,
    },
    {
      table: UserDataStore.oneResponse?.FIO,
      tableName: "FIO",
      children: FioForm,
    },
    {
      table: UserDataStore.oneResponse?.Passport,
      tableName: "Passport",
      children: PassportForm,
    },
  ];

  if (UserDataStore.oneResponse) {
    return (
      <div className="container mx-auto mb-auto">
        {tableRows.map((e) => (
          <Table
            table={e.table}
            tableName={e.tableName}
            children={e.children}
          />
        ))}
      </div>
    );
  }
  return <LoadingSpinner />;
};

export default observer(Profile);

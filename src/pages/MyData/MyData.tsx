import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import UserDataStore from "../../store/UserDataStore";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import AdressForm from "../../forms/ModalForms/AddressForm";
import CommonForm from "../../forms/ModalForms/CommonForm";
import FioForm from "../../forms/ModalForms/FioForm";
import PassportForm from "../../forms/ModalForms/PassportForm";
import { toJS } from "mobx";
import MyDataTable from "./MyDataTable";

const MyData: React.FC = () => {
  useEffect(() => {
    UserDataStore.getOne();
  }, []);

  const tableRows = [
    {
      table: UserDataStore.oneResponse
        ? UserDataStore.oneResponse.Address
        : null,
      tableName: "Address",
      children: AdressForm,
    },
    {
      table: UserDataStore.oneResponse
        ? UserDataStore.oneResponse.Common
        : null,
      tableName: "Common",
      children: CommonForm,
    },
    {
      table: UserDataStore.oneResponse ? UserDataStore.oneResponse.FIO : null,
      tableName: "FIO",
      children: FioForm,
    },
    {
      table: UserDataStore.oneResponse
        ? UserDataStore.oneResponse.Passport
        : null,
      tableName: "Passport",
      children: PassportForm,
    },
  ];

  if (UserDataStore.oneResponse) {
    return (
      <div className="container mx-auto my-10">
        {tableRows.map((e) => (
          <MyDataTable
            key={e.tableName}
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

export default observer(MyData);

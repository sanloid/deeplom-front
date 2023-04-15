import React, { useEffect, useRef, useState } from "react";
import { observer } from "mobx-react-lite";
import UserDataStore from "../../store/UserDataStore";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import AdressForm from "../../forms/ModalForms/AddressForm";
import CommonForm from "../../forms/ModalForms/CommonForm";
import FioForm from "../../forms/ModalForms/FioForm";
import PassportForm from "../../forms/ModalForms/PassportForm";
import { toJS } from "mobx";
import MyDataTable from "./MyDataTable";
import { Button, Tabs, TabsRef } from "flowbite-react";

const MyData: React.FC = () => {
  useEffect(() => {
    // console.log("effect");
    UserDataStore.getOne();
  }, []);

  const tables = [
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

  const [activeTab, setActiveTab] = useState<number>(0);
  const tabsRef = useRef<TabsRef>(null);

  // console.log(toJS(UserDataStore.oneResponse));
  if (UserDataStore.oneResponse) {
    return (
      <div className="container mx-auto my-10">
        <Tabs.Group
          aria-label="Default tabs"
          style="default"
          ref={tabsRef}
          onActiveTabChange={(tab) => setActiveTab(tab)}
        >
          <Tabs.Item active title="Address" />
          <Tabs.Item title="Common" />
          <Tabs.Item title="FIO" />
          <Tabs.Item title="Passport" />
        </Tabs.Group>
        <MyDataTable
          key={tables[activeTab].tableName}
          table={tables[activeTab].table}
          tableName={tables[activeTab].tableName}
          children={tables[activeTab].children}
        />
      </div>
    );
  }
  return <LoadingSpinner />;
};

export default observer(MyData);

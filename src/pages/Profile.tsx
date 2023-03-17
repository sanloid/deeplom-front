import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import UserDataStore from "../store/UserDataStore";
import { Translate } from "../types/paramName";
import TableContent from "../components/UI/TableContent";

const Profile: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!UserDataStore.checkAuth()) navigate("/login");
    else {
      const fetch = async () => UserDataStore.getOne();
      fetch();
    }
  }, []);

  const keys = Object.keys(Object(Translate));

  const tableRows = keys.map((e) => {
    const name = Translate[e];
    const value = UserDataStore.oneResponse?.[e];
    return { name: name, content: value };
  });

  if (UserDataStore.loadingOne) {
    console.log("loading");
    return <>loading...</>;
  }

  return (
    <div className="container mx-auto flex-grow">
      <table className="min-w-full">
        <thead className="bg-white border-b">
          <tr>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              {"Атрибут"}
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              {"Значение"}
            </th>
          </tr>
        </thead>
        <tbody>
          <TableContent TableRows={tableRows} />
        </tbody>
      </table>
    </div>
  );
};

export default observer(Profile);

import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Navigate } from "react-router-dom";
import TableRow from "../components/UI/TableRow";
import UserDataStore from "../store/UserDataStore";
import { Translate } from "../types/paramName";

const Profile = () => {
  const authenticated = UserDataStore.checkAuth();
  if (!authenticated) {
    return <Navigate replace to="/login" />;
  }

  useEffect(() => {
    UserDataStore.getOne();
  }, []);

  const keys = Object.keys(Object(Translate));

  const tableRows = keys.map((e) => {
    const name = Translate[e];
    const value = UserDataStore.oneResponse?.[e];
    return { name: [name], content: value };
  });

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
          {tableRows.map((e) => (
            <TableRow name={e.name} content={e.content} key={e.name} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default observer(Profile);

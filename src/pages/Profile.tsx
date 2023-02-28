import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Navigate } from "react-router-dom";
import TableBuilder from "../components/TableBuilder";
import TableRow, { ITableRow } from "../components/UI/TableRow";
import UserDataStore from "../store/UserDataStore";
import { toJS } from "mobx";

const Profile = () => {
  const tableRows: ITableRow[] = [
    {
      name: "Фамилия",
      content: [UserDataStore.oneResponse?.lastName],
    },
    {
      name: "Имя",
      content: [UserDataStore.oneResponse?.firstName],
    },
    {
      name: "Отчество",
      content: [UserDataStore.oneResponse?.secondName],
    },
    {
      name: "Пол",
      content: [UserDataStore.oneResponse?.gender],
    },
    {
      name: "Номер телефона",
      content: [UserDataStore.oneResponse?.phoneNumber],
    },
    {
      name: "Страна",
      content: [UserDataStore.oneResponse?.country],
    },
    {
      name: "Область",
      content: [UserDataStore.oneResponse?.area],
    },
    {
      name: "Населенный пункт",
      content: [UserDataStore.oneResponse?.city],
    },
    {
      name: "Улица",
      content: [UserDataStore.oneResponse?.street],
    },
    {
      name: "Дом",
      content: [UserDataStore.oneResponse?.houseNum],
    },
    {
      name: "Квартира",
      content: [UserDataStore.oneResponse?.flat],
    },

    {
      name: "Серия",
      content: [UserDataStore.oneResponse?.series],
    },
    {
      name: "Номер",
      content: [UserDataStore.oneResponse?.pasportNum],
    },
    {
      name: "Кем выдан",
      content: [UserDataStore.oneResponse?.issuedBy],
    },
    {
      name: "Место регистрации",
      content: [UserDataStore.oneResponse?.placeOfRegistration],
    },
  ];

  const authenticated = UserDataStore.checkAuth();
  if (!authenticated) {
    return <Navigate replace to="/login" />;
  }

  useEffect(() => {
    UserDataStore.getOne();
  }, []);

  return (
    // <TableBuilder columnNames={["Атрибут", "Значение"]} tableRows={tableRows} />
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
            <tr
              onClick={() => {
                console.log("qwe");
                console.log(toJS(UserDataStore.oneResponse));
              }}
              className="bg-gray-100 border-b hover:bg-gray-300"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {e.name}
              </td>
              <td className="flex text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {e.content}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default observer(Profile);

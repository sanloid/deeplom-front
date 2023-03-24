import React, { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import { AiOutlineEdit } from "react-icons/ai";
import { UserData } from "../../types/UserApiResponse";
import { Modal } from "./Modal";

export interface ITableProps {
  table: UserData;
  tableName: string;
  children?: any;
}

const Table: React.FC<ITableProps> = ({ table, tableName, children }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="overflow-x-auto shadow-md rounded-2xl mb-8 mx-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-2xl">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-200">
                {tableName}
              </th>
              <th className="px-6 py-3 bg-gray-200 text-right">
                <button
                  onClick={() => setVisible(true)}
                  type="button"
                  className="inline-block px-6 py-2.5 rounded-2xl bg-blue-400 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-500 hover:shadow-lg transition duration-150 ease-in-out"
                >
                  <AiOutlineEdit />
                </button>
              </th>
            </tr>
            <tr>
              <th scope="col" className="px-6 py-3">
                Атрибут
              </th>
              <th scope="col" className="px-6 py-3">
                Значение
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(table).map((e) => {
              return (
                <tr
                  key={e[0]}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {e[0]}
                  </th>
                  <td className="px-6 py-4">{e[1]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Modal
        visible={visible}
        setVisible={setVisible}
        name={tableName}
        children={children}
      />
    </>
  );
};

export default observer(Table);

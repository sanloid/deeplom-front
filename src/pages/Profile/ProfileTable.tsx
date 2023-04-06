import React, { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import { AiOutlineEdit } from "react-icons/ai";
import { UserData } from "../../types/UserApiResponse";
import { Modal } from "../../components/Modals/Modal";

export interface ITableProps {
  table: UserData | null;
  tableName: string;
  children?: any;
}

const ProfileTable: React.FC<ITableProps> = ({
  table,
  tableName,
  children,
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="overflow-x-auto shadow-md rounded-2xl mb-8 mx-5">
        <table className="table-default">
          <thead className="thead-default">
            <tr>
              <th scope="col" className="th-default bg-gray-200">
                {tableName}
              </th>
              <th className="th-default bg-gray-200 text-right">
                <button
                  onClick={() => setVisible(true)}
                  type="button"
                  className="inline-block p-2.5 rounded-2xl bg-blue-400 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-500 hover:shadow-lg hover:scale-125 transition duration-200 ease-in-out"
                >
                  <AiOutlineEdit />
                </button>
              </th>
            </tr>
            <tr>
              <th scope="col" className="th-default">
                Атрибут
              </th>
              <th scope="col" className="th-default">
                Значение
              </th>
            </tr>
          </thead>
          <tbody>
            {table ? (
              Object.entries(table).map((e) => {
                return (
                  <tr key={e[0]} className="tr-default">
                    <td scope="row" className="td-default">
                      {e[0]}
                    </td>
                    <td className="px-6 py-4">{e[1]}</td>
                  </tr>
                );
              })
            ) : (
              <></>
            )}
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

export default observer(ProfileTable);

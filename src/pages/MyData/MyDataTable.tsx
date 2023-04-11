import React, { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import { AiOutlineEdit } from "react-icons/ai";
import { UserData } from "../../types/UserApiResponse";
import { MyModal } from "../../components/Modals/MyModal";
import { Table } from "flowbite-react";

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
        <Table hoverable={true}>
          <Table.Head>
            <Table.HeadCell>{tableName}</Table.HeadCell>
            <Table.HeadCell className="flex justify-end">
              <button
                onClick={() => setVisible(true)}
                type="button"
                className="inline-block p-2.5 rounded-2xl bg-blue-400 dark:bg-gray-300 text-white dark:text-black font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-500 hover:shadow-lg hover:scale-125 transition duration-200 ease-in-out"
              >
                <AiOutlineEdit />
              </button>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="dark:bg-gray-800 divide-y">
            {table
              ? Object.entries(table).map((e) => {
                  return (
                    <Table.Row
                      key={e[0]}
                      className="tr-default dark:border-gray-700"
                    >
                      <Table.Cell scope="row" className="td-default">
                        {e[0]}
                      </Table.Cell>
                      <Table.Cell className="px-6 py-4">{e[1]}</Table.Cell>
                    </Table.Row>
                  );
                })
              : null}
          </Table.Body>
        </Table>
      </div>
      <MyModal
        visible={visible}
        setVisible={setVisible}
        name={tableName}
        children={children}
      />
    </>
  );
};

export default observer(ProfileTable);

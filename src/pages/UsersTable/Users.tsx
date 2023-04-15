import React from "react";
import UserDataStore from "../../store/UserDataStore";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import { observer } from "mobx-react-lite";
import UsersTableRow from "./UsersTableRow";
import { Table } from "flowbite-react";

const Users: React.FC = () => {
  React.useEffect(() => {
    UserDataStore.getOperatorUsersData();
  }, []);
  if (UserDataStore.operatorUsersData)
    return (
      <>
        <div className="container mx-auto my-10">
          <Table>
            <Table.Head>
              <Table.HeadCell>login</Table.HeadCell>
              <Table.HeadCell>ФИО</Table.HeadCell>
              <Table.HeadCell>Адрес</Table.HeadCell>
              <Table.HeadCell>Пасспорт</Table.HeadCell>
              <Table.HeadCell>Общие данные</Table.HeadCell>
            </Table.Head>
            <Table.Body className="tbody-default">
              {UserDataStore.operatorUsersData?.map((e) => {
                const { id, login, ...permission } = e;
                return (
                  <Table.Row key={login} className="tr-default">
                    <Table.Cell className="td-default">{login}</Table.Cell>
                    {Object.entries(permission).map((atr) => (
                      <UsersTableRow
                        atr={atr[1]}
                        id={id}
                        key={`${atr[0]}${atr[1]}`}
                        dataName={atr[0]}
                        userLogin={login}
                      />
                    ))}
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </div>
      </>
    );
  return <LoadingSpinner />;
};

export default observer(Users);

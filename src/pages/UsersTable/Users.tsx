import React from "react";
import UserDataStore from "../../store/UserDataStore";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import { observer } from "mobx-react-lite";
import UsersTableRow from "./UsersTableRow";

const Users: React.FC = () => {
  React.useEffect(() => {
    UserDataStore.getOperatorUsersData();
  }, []);
  if (UserDataStore.operatorUsersData)
    return (
      <>
        <div className="container mx-auto">
          <table className="table-default">
            <thead className="thead-default">
              <tr className="tr-default">
                <th className="th-default">login</th>
                <th className="th-default">ФИО</th>
                <th className="th-default">Адрес</th>
                <th className="th-default">Пасспорт</th>
                <th className="th-default">Общие данные</th>
              </tr>
            </thead>
            <tbody className="tbody-default">
              {UserDataStore.operatorUsersData?.map((e) => {
                const { id, login, ...permission } = e;
                // console.log(toJS(e));
                return (
                  <tr key={login} className="tr-default">
                    <td className="td-default">{login}</td>
                    {Object.entries(permission).map((atr) => (
                      <UsersTableRow
                        atr={atr[1]}
                        id={id}
                        key={`${atr[0]}${atr[1]}`}
                        dataName={atr[0]}
                        userLogin={login}
                      />
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  return <LoadingSpinner />;
};

export default observer(Users);

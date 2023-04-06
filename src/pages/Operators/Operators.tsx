import React from "react";
import { observer } from "mobx-react-lite";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import UserDataStore from "../../store/UserDataStore";
import OperatorTableRow from "./OperatorTableRow";
import RoleVerify from "../../hooks/RoleVerify";

const Operators: React.FC = () => {
  React.useEffect(() => {
    UserDataStore.getOperatorsPerm();
  }, []);
  if (UserDataStore.userOperator) {
    return (
      <>
        <RoleVerify to={"/profile"} role={"USER"} />
        <div className="mx-auto mb-auto w-full">
          <div className="overflow-x-auto shadow-md rounded-2xl mb-8 mx-5">
            <table className="table-default">
              <thead className="thead-default">
                <tr className="tr-default bg-gray-200">
                  <th scope="col" className="th-default">
                    Operator
                  </th>
                  <th className="th-default">Permission</th>
                </tr>
              </thead>
              <tbody>
                {UserDataStore.userOperator.map((e) => (
                  <OperatorTableRow {...e} key={e.id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <RoleVerify to={"/profile"} role={"USER"} />
      <LoadingSpinner />
    </>
  );
};

export default observer(Operators);

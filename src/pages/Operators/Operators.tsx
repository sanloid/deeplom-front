import React from "react";
import { observer } from "mobx-react-lite";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import UserDataStore from "../../store/UserDataStore";
import OperatorTableRow from "./OperatorTableRow";
import RoleVerify from "../../hooks/RoleVerify";
import { Table } from "flowbite-react";

const Operators: React.FC = () => {
  React.useEffect(() => {
    UserDataStore.getOperatorsPerm();
  }, []);
  if (UserDataStore.userOperator) {
    return (
      <>
        <RoleVerify to={"/profile"} role={"USER"} />
        <div className="container mx-auto my-16">
          <Table className="rounded-full">
            <Table.Head className="dark:bg-gray-700 dark:text-gray-300 transition duration-300 ease-in-out">
              <Table.HeadCell>Operator</Table.HeadCell>
              <Table.HeadCell>Permission</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {UserDataStore.userOperator.map((e) => (
                <OperatorTableRow {...e} key={e.id} />
              ))}
            </Table.Body>
          </Table>
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

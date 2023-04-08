import React from "react";
import { GrAdd } from "react-icons/gr";
import { OperPerm } from "../../types/UserApiResponse";
import AddPermissionModal from "../../components/Modals/AddPermissionModal";
import { Modal } from "../../components/Modals/Modal";
import Chip from "../../components/UI/Chip";
import { Table } from "flowbite-react";

const OperatorTableRow: React.FC<OperPerm> = (operatorPerm) => {
  const [visible, setVisible] = React.useState(false);
  const { id, login, firstName, secondName, lastName, ...permission } =
    operatorPerm;
  return (
    <Table.Row
      key={id}
      className="border-b-2 dark:border-gray-700 last:border-none dark:bg-gray-800 transition duration-300 ease-in-out"
    >
      <Table.Cell>
        <Table className="dark:text-gray-300 transition duration-300 ease-in-out">
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <span>login</span>
              </Table.Cell>
              <Table.Cell>
                <span>{login}</span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span>FirstName</span>
              </Table.Cell>
              <Table.Cell>
                <span>{firstName}</span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span>Lastname</span>
              </Table.Cell>
              <Table.Cell>
                <span>{lastName}</span>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Table.Cell>
      <Table.Cell>
        {/* <div> */}
        {Object.entries(permission).map((e) => {
          if (e[1])
            return (
              <Chip
                key={`${e[0]}${login}`}
                name={e[0]}
                operatorID={id}
                operatorLogin={login}
                value={false}
              />
            );
          return <></>;
        })}
        {!Object.values(permission).every((e) => e === true) ? (
          <button
            onClick={() => setVisible(true)}
            className="relative bg-blue-500 text-white font-bold p-3 rounded-full Table.Rowansition Table.Rowansform duration-500 ease-in-out hover:scale-110 hover:rotate-90 hover:bg-blue-600 z-10"
          >
            <GrAdd />
          </button>
        ) : (
          <></>
        )}
        <Modal
          visible={visible}
          setVisible={setVisible}
          name={"Изменение разрешений"}
          children={AddPermissionModal}
          childrenProps={{ perm: operatorPerm }}
        />
        {/* </div> */}
      </Table.Cell>
    </Table.Row>
  );
};

export default OperatorTableRow;

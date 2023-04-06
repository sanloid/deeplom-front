import React from "react";
import { GrAdd } from "react-icons/gr";
import { OperPerm } from "../../types/UserApiResponse";
import AddPermissionModal from "../../components/Modals/AddPermissionModal";
import { Modal } from "../../components/Modals/Modal";
import Chip from "../../components/UI/Chip";

const OperatorTableRow: React.FC<OperPerm> = (operatorPerm) => {
  const [visible, setVisible] = React.useState(false);
  const { id, login, firstName, secondName, lastName, ...permission } =
    operatorPerm;
  return (
    <tr
      key={id}
      className="tr-default border-b-2 border-gray-400 hover:bg-gray-200"
    >
      <td scope="row" className="td-default">
        <table className="table-default">
          <tbody>
            <tr className="tr-default">
              <td className="td-default">
                <span>login</span>
              </td>
              <td className="td-default">
                <span>{login}</span>
              </td>
            </tr>
            <tr className="tr-default">
              <td className="td-default">
                <span>FirstName</span>
              </td>
              <td className="td-default">
                <span>{firstName}</span>
              </td>
            </tr>
            <tr className="tr-default">
              <td className="td-default">
                <span>Lastname</span>
              </td>
              <td className="td-default">
                <span>{lastName}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td className="td-default">
        <div>
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
              className="relative bg-blue-500 text-white font-bold p-3 rounded-full transition transform duration-500 ease-in-out hover:scale-110 hover:rotate-90 hover:bg-blue-600 z-10"
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
        </div>
      </td>
    </tr>
  );
};

export default OperatorTableRow;

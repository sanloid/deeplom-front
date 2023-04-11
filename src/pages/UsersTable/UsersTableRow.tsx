import React from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { MyModal } from "../../components/Modals/MyModal";
import { toJS } from "mobx";
import { UserData } from "../../types/UserApiResponse";
import { JsonToTable } from "react-json-to-table";
import DataModal from "../../components/Modals/DataModal";
import RequestModal from "../../components/Modals/RequestModal";

export interface IUserTableRow {
  atr: any;
  id: string;
  dataName: string;
  userLogin: string;
}

const UsersTableRow: React.FC<IUserTableRow> = ({
  atr,
  id,
  dataName,
  userLogin,
}) => {
  const [visibleDataModal, setVisibleDataModal] = React.useState(false);
  const [visibleReqModal, setVisibleReqModal] = React.useState(false);
  return (
    <td className="td-default">
      {atr ? (
        <button onClick={() => setVisibleDataModal(true)}>
          <FiEye />
          <MyModal
            visible={visibleDataModal}
            setVisible={setVisibleDataModal}
            name={"Данные"}
            children={DataModal}
            childrenProps={{ data: atr }}
          />
        </button>
      ) : (
        <button onClick={() => setVisibleReqModal(true)}>
          <FiEyeOff />
          <MyModal
            visible={visibleReqModal}
            setVisible={setVisibleReqModal}
            name={"Запрос данных"}
            children={RequestModal}
            childrenProps={{
              setVisible: setVisibleReqModal,
              dataName: dataName,
              userLogin: userLogin,
              userID: id,
            }}
          />
        </button>
      )}
    </td>
  );
};

export default UsersTableRow;

import React from "react";
import Operator from "../../api/requests/Operator";
import UserDataStore from "../../store/UserDataStore";
import { DataType } from "../../types/UserApiRequest";
import LoadingSpinner from "../UI/LoadingSpinner";

export interface IRequestModal {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  dataName: string;
  userLogin: string;
  userID: string;
}

const RequestModal: React.FC<IRequestModal> = ({
  setVisible,
  dataName,
  userLogin,
  userID,
}) => {
  const sendRequestToUserData = async () => {
    setLoading(true);
    const res = await Operator.sendRequestToUserData(
      UserDataStore.getDecodedAccessToken().id,
      {
        userId: String(userID),
        datatype: dataName.toUpperCase() as DataType,
      }
    );
    console.log(res);
    setLoading(false);
  };
  const [loading, setLoading] = React.useState(false);

  if (loading)
    return (
      <div className="my-10 flex justify-center">
        <LoadingSpinner />
      </div>
    );
  return (
    <div className="container p-5">
      <div className="flex flex-col">
        <span className="mx-auto">
          Вы действительно хотите отправить запрос
        </span>
        <span className="mx-auto">
          на получение {dataName} пользователя {userLogin}?
        </span>
      </div>
      <div className="mt-10 flex justify-between w-1/3 mx-auto">
        <button onClick={sendRequestToUserData} className="green-btn">
          Yes
        </button>
        <button onClick={() => setVisible(false)} className="red-btn">
          No
        </button>
      </div>
    </div>
  );
};

export default RequestModal;

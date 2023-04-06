import React from "react";

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
}) => {
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
        <button onClick={() => 1} className="green-btn">
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

import React, { useState } from "react";
import User from "../../api/requests/User";
import UserDataStore from "../../store/UserDataStore";
import LoadingSpinner from "../UI/LoadingSpinner";

export interface IChipModal {
  operatorLogin: string;
  operatorID: number;
  name: string;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  value: boolean;
}

const ChipModal: React.FC<IChipModal> = ({
  operatorLogin,
  operatorID,
  name,
  setVisible,
  value,
}) => {
  const [loading, setLoading] = useState("default");
  if (loading === "default")
    return (
      <>
        <div className="relative bg-white container p-5 rounded-full">
          <div className="flex justify-items-center justify-center flex-col mb-5">
            <span className="flex justify-center">
              {value ? (
                <>Вы действительно хотите добавить оператору {operatorLogin}</>
              ) : (
                <>Вы действительно хотите убрать у оператора {operatorLogin}</>
              )}
            </span>
            <br />
            <span className="flex justify-center">
              возможность просматривать ваш {name}?
            </span>
          </div>
          <div className="flex justify-evenly">
            <button
              onClick={async () => {
                setLoading("pending");
                await User.updateOperatorPermission(
                  UserDataStore.getDecodedAccessToken().id,
                  {
                    operatorId: operatorID,
                    permission: name,
                    value: value,
                  }
                );
                await UserDataStore.getOperatorsPerm();
                setVisible(false);
              }}
              className="green-btn"
            >
              Yes
            </button>
            <button onClick={() => setVisible(false)} className="red-btn">
              No
            </button>
          </div>
        </div>
      </>
    );
  return (
    <div className="flex justify-center p-5 m-5">
      <LoadingSpinner />
    </div>
  );
};

export default ChipModal;

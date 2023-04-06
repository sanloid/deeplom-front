import { toJS } from "mobx";
import React from "react";
import UserDataStore from "../../store/UserDataStore";
import { OperPerm } from "../../types/UserApiResponse";
import Chip from "../UI/Chip";

export interface IAddPermissionModal {
  perm: OperPerm;
}

const AddPermissionModal: React.FC<IAddPermissionModal> = ({ perm }) => {
  const { id, login, firstName, secondName, lastName, ...permission } = perm;
  return (
    <div className="p-5">
      <div>
        {Object.entries(permission).map((e) => {
          if (!e[1])
            return (
              <Chip
                name={e[0]}
                operatorID={id}
                operatorLogin={login}
                value={true}
              />
            );
          return <></>;
        })}
      </div>
    </div>
  );
};

export default AddPermissionModal;

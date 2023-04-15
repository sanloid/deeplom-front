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
        {Object.entries(permission).map(([name, value]) =>
          value ? null : (
            <Chip
              key={name}
              name={name}
              operatorID={id}
              operatorLogin={login}
              value={true}
            />
          )
        )}
      </div>
    </div>
  );
};

export default AddPermissionModal;

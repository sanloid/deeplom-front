import React from "react";
import { IoIosClose } from "react-icons/io";
export interface IModal {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  children?: React.FC<any>;
  childrenProps?: any;
}

export const Modal: React.FC<IModal> = ({
  visible,
  setVisible,
  name,
  children,
  childrenProps,
}) => {
  return (
    <div>
      <div
        onClick={() => setVisible(false)}
        className={visible ? "modal" : "hidden"}
      >
        <div onClick={(e) => e.stopPropagation()} className="modal-content">
          <div className="p-4 flex justify-between m-2 border-b-2">
            <span className="">{name}</span>
            <button
              className="bg-red-500 rounded-full p-2 text-white text-2xl"
              onClick={() => setVisible(false)}
            >
              <IoIosClose />
            </button>
          </div>
          {children ? children({ ...childrenProps }) : <></>}
        </div>
      </div>
    </div>
  );
};

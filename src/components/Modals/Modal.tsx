import React from "react";
import { createPortal } from "react-dom";
import ModalHeader from "./ModalHeader";

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
  if (!visible) return null;
  return createPortal(
    <div>
      <div onClick={() => setVisible(false)} className="modal">
        <div onClick={(e) => e.stopPropagation()} className="modal-content">
          <ModalHeader name={name} setVisible={setVisible} />
          {children ? children({ ...childrenProps }) : <></>}
        </div>
      </div>
    </div>,
    document.body
  );
};

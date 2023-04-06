import React from "react";
import { IoIosClose } from "react-icons/io";

export interface IModalHeader {
  name: string;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalHeader: React.FC<IModalHeader> = ({ name, setVisible }) => {
  return (
    <div className="p-2 flex justify-between m-2 border-b-2">
      <span className="pl-5 text-2xl flex justify-center flex-col">{name}</span>
      <button
        className="bg-red-500 rounded-full p-2 text-white text-2xl"
        onClick={() => setVisible(false)}
      >
        <IoIosClose />
      </button>
    </div>
  );
};

export default ModalHeader;

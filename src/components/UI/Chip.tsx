import React, { useState } from "react";
import ChipModal from "../Modals/ChipModal";
import { MyModal } from "../Modals/MyModal";

export interface IChip {
  name: string;
  operatorID: number;
  operatorLogin: string;
  value: boolean;
}

const Chip: React.FC<IChip> = ({ name, operatorID, operatorLogin, value }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div>
        <span className="m-2 px-4 py-2 rounded-full text-gray-500 bg-gray-200 dark:bg-gray-900 font-semibold text-sm flex align-center w-max cursor-pointer hover:bg-gray-100 transition duration-300 ease">
          {name}
          <button
            onClick={() => setVisible(true)}
            className="bg-transparent hover focus:outline-none"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="times"
              className={`w-3 ml-3 hover:rotate-45 transition duration-300 ease-in-out ${
                value ? "rotate-45" : ""
              }`}
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 352 512"
            >
              <path
                fill="currentColor"
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
              ></path>
            </svg>
          </button>
        </span>
      </div>
      <MyModal
        visible={visible}
        setVisible={setVisible}
        name={`Подтверждение`}
        children={ChipModal}
        childrenProps={{
          operatorID: operatorID,
          operatorLogin: operatorLogin,
          name: name,
          setVisible: setVisible,
          value: value,
        }}
      />
    </>
  );
};

export default Chip;

import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { MdOutlineClose, MdDone } from "react-icons/md";
import User from "../../api/requests/User";
import UserDataStore from "../../store/UserDataStore";

export interface ITableRow {
  name: string;
  content: string | undefined;
}

const TableRow: React.FC<ITableRow> = ({ name, content }) => {
  const [changing, setChanging] = useState(false);
  const [value, setValue] = useState(content);

  return (
    <tr className="bg-gray-100 border-b hover:bg-gray-300">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {name}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <div className={changing ? "hidden" : "flex justify-between flex-row"}>
          <div className="text-center place-self-center p-2 m-2">{value}</div>
          <button
            className="border-2 border-gray-500 p-2 m-2 rounded-xl justify-self-end"
            onClick={() => {
              setChanging(true);
            }}
          >
            <BiEditAlt />
          </button>
        </div>
        <div className={changing ? "flex justify-between flex-row" : "hidden"}>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="rounded-full p-2 m-2"
            type="text"
          />
          <div>
            <button
              className="border-2 border-black p-2 m-2 rounded-full"
              onClick={() => {
                setChanging(false);
                if (value)
                  User.updateOneAtr(UserDataStore.oneResponse?.id, value, name);
              }}
            >
              <MdDone />
            </button>
            <button
              className="border-2 border-black p-2 m-2 rounded-full"
              onClick={() => setChanging(false)}
            >
              <MdOutlineClose />
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;

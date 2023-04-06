import React from "react";

export interface ISearchUsersRow {
  firstName: string;
  surname: string;
  email: string;
  descrip: string;
  photo: string;
}

const SearchUsersRow: React.FC<ISearchUsersRow> = ({
  firstName,
  surname,
  email,
  descrip,
  photo,
}) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img className="w-10 h-10 rounded-full" src={photo} alt="Jese image" />
        <div className="pl-3">
          <div className="text-base font-semibold">
            {firstName} {surname}
          </div>
          <div className="font-normal text-gray-500">{email}</div>
        </div>
      </th>
      <td className="px-6 py-4">{descrip}</td>
      <td className="px-6 py-4">
        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline flex">
          <span className="flex text-center p-2">more</span>
        </button>
      </td>
    </tr>
  );
};

export default SearchUsersRow;

import React from "react";
import Chip from "./Chip";

export interface ITableRow {
  name: string;
  content: any[];
}

const TableRow: React.FC<ITableRow> = ({ name, content }) => {
  return (
    <tr className="bg-gray-100 border-b hover:bg-gray-300">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {name}
      </td>
      <td className="flex text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {content}
      </td>
    </tr>
  );
};

export default TableRow;

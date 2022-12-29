import React from "react";
import Chip, { EChip } from "./Chip";

export interface ITableRow {
  name: string;
  permission: EChip[];
}

const TableRow: React.FC<ITableRow> = ({ name, permission }) => {
  return (
    <tr className="bg-gray-100 border-b hover:bg-gray-300">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {name}
      </td>
      <td className="flex text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {/* chips */}
        {permission.map((e) => {
          return <Chip name={e} key={e} />;
        })}
      </td>
    </tr>
  );
};

export default TableRow;

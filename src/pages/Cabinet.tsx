import React from "react";
import { EChip } from "../components/UI/Chip";
import TableRow, { ITableRow } from "../components/UI/TableRow";

const Cabinet: React.FC = () => {
  const tableRows: ITableRow[] = [
    {
      name: "Operator 1",
      permission: [EChip.Adress, EChip.CommonData, EChip.Passport],
    },
    {
      name: "Operator 2",
      permission: [EChip.CommonData, EChip.Passport],
    },
    {
      name: "Operator 3",
      permission: [EChip.CommonData, EChip.Passport],
    },
    {
      name: "Operator 4",
      permission: [EChip.CommonData],
    },
  ];
  return (
    <div className="container mx-auto flex-grow">
      <table className="min-w-full">
        <thead className="bg-white border-b">
          <tr>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Имя оператора
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Доступ
            </th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map((e) => (
            <TableRow {...e} key={e.name} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cabinet;

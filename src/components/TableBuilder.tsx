import React from "react";
import TableRow from "./UI/TableRow";

export interface ITableContent {
  columnNames: string[];
  tableRows: any[];
}

const TableBuilder: React.FC<ITableContent> = ({ tableRows, columnNames }) => {
  return (
    <div className="container mx-auto flex-grow">
      <table className="min-w-full">
        <thead className="bg-white border-b">
          <tr>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              {columnNames[0]}
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              {columnNames[1]}
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

export default TableBuilder;

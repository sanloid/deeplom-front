import React from "react";
import TableBuilder from "../components/TableBuilder";
import Chip from "../components/UI/Chip";
import { ITableRow } from "../components/UI/TableRow";

const Cabinet: React.FC = () => {
  const tableRows: ITableRow[] = [
    {
      name: "Operator 1",
      content: [Chip.Adress(), Chip.Common()],
    },
    {
      name: "Operator 2",
      content: [Chip.Adress(), Chip.Common()],
    },
    {
      name: "Operator 3",
      content: [Chip.Adress(), Chip.Common()],
    },
    {
      name: "Operator 4",
      content: [Chip.Adress(), Chip.Common(), Chip.Passport()],
    },
  ];
  return (
    <TableBuilder
      columnNames={["Имя оператора", "Доступ"]}
      tableRows={tableRows}
    />
  );
};

export default Cabinet;

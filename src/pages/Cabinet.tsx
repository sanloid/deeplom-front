import React from "react";
import { Navigate } from "react-router-dom";
import TableBuilder from "../components/TableBuilder";
import Chip from "../components/UI/Chip";
import { ITableRow } from "../components/UI/TableRow";
import UserDataStore from "../store/UserDataStore";

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
  const authenticated = UserDataStore.checkAuth();
  if (!authenticated) {
    return <Navigate replace to="/login" />;
  }
  return (
    <TableBuilder
      columnNames={["Имя оператора", "Доступ"]}
      tableRows={tableRows}
    />
  );
};

export default Cabinet;

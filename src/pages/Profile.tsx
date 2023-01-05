import React from "react";
import TableBuilder from "../components/TableBuilder";
import TableRow, { ITableRow } from "../components/UI/TableRow";

const Profile = () => {
  const tableRows: ITableRow[] = [
    {
      name: "Имя",
      content: ["qwe"],
    },
    {
      name: "Operator 2",
      content: ["qwe"],
    },
    {
      name: "Operator 3",
      content: ["qwe"],
    },
    {
      name: "Operator 4",
      content: ["qwe"],
    },
  ];
  return (
    <TableBuilder columnNames={["Атрибут", "Значение"]} tableRows={tableRows} />
  );
};

export default Profile;

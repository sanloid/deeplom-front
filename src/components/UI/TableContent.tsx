import { observer } from "mobx-react-lite";
import React from "react";
import TableRow from "./TableRow";

export interface ITableContent {
  TableRows: {
    name: any;
    content: any;
  }[];
}

const TableContent: React.FC<ITableContent> = ({ TableRows }) => {
  return (
    <>
      {TableRows.map((e) => (
        <TableRow name={e.name} content={e.content} key={e.name} />
      ))}
    </>
  );
};

export default observer(TableContent);

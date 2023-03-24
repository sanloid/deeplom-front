import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Chip from "../components/UI/Chip";

const Operators: React.FC = () => {
  const tableRows = [
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

  return <div className="mx-auto mb-auto"></div>;
};

export default Operators;

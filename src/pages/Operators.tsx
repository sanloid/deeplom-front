import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Chip from "../components/UI/Chip";
import UserDataStore from "../store/UserDataStore";

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

  const navigate = useNavigate();

  useEffect(() => {
    const authenticated = UserDataStore.checkAuth();
    if (!UserDataStore.checkAuth()) navigate("/login");
  }, []);

  return (
    <div className="container mx-auto flex-grow">
      <table className="min-w-full">
        <thead className="bg-white border-b">
          <tr>
            <th
              scope="col"
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Оператор
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
            <tr className="bg-gray-100 border-b hover:bg-gray-300" key={e.name}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {e.name}
              </td>
              <td className="flex text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <div className="">
                  <div className="flex flex-row text-center place-self-center">
                    {e.content}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Operators;

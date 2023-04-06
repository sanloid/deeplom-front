import { JsonToTable } from "react-json-to-table";
import { UserData } from "../../types/UserApiResponse";

export interface IDataModal {
  data: UserData;
}

const DataModal: React.FC<IDataModal> = ({ data }) => {
  return (
    <div className="p-5">
      <JsonToTable json={data} />
    </div>
  );
};

export default DataModal;

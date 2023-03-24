import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import AddressForm from "../forms/AddressForm";
import { Modal } from "../components/UI/Modal";

export const TestPage: React.FC = observer(() => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible(true)}>qwe</button>
      <Modal
        visible={visible}
        setVisible={setVisible}
        children={AddressForm}
        name={"Address"}
      />
    </div>
  );
});

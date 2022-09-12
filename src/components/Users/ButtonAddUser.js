import React, { useState } from "react";
import { ModalAddUser } from "./ModalAddUser";

export const ButtonAddUser = () => {
  const [modalOn, setModalOn] = useState(false);

  const openModalClicked = () => {
    setModalOn(true);
  };

  const closeModalClicked = () => {
    setModalOn(false);
  };

  return (
    <div>
      <button type="button" className="btn btn-primary">
        Agregar Usuario
      </button>
      {modalOn && (
        <ModalAddUser closeModalClicked={closeModalClicked}></ModalAddUser>
      )}
    </div>
  );
};

import React, { useState } from "react";
import { ModalAddIngredient } from "./ModalAddIngredient";

export const ButtonAddIngredient = () => {
  const [modalOn, setModalOn] = useState(false);

  // const openModalClicked = () => {
  //   setModalOn(true);
  // };

  const closeModalClicked = () => {
    setModalOn(false);
  };
  return (
    <div>
      <button type="button" className="btn btn-primary">
        Agregar ingrediente
      </button>
      {modalOn && (
        <ModalAddIngredient
          closeModalClicked={closeModalClicked}
        ></ModalAddIngredient>
      )}
    </div>
  );
};

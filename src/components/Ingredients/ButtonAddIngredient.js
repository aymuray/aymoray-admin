import React, { useState } from 'react'
import { ModalAddIngredient } from './ModalAddIngredient';

export const ButtonAddIngredient = () => {
const [modalOn, setModalOn] = useState(false);

  const openModalClicked = () => {
    setModalOn(true)
  }

  const closeModalClicked = () => {
    setModalOn(false)
  }
  return (
    <div>
    <button
      class="block mt-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
      onClick={openModalClicked}
    >
      Agregar Ingrediente
    </button>
    {modalOn && <ModalAddIngredient closeModalClicked={closeModalClicked} ></ModalAddIngredient>}
  </div>
  )
}

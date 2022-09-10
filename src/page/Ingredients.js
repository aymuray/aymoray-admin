import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { ButtonAddIngredient } from "../components/Ingredients/ButtonAddIngredient";
import { TableIngredient } from "../components/Ingredients/TableIngredient";
import { Search } from "../components/Search";
import { db } from "../firebase";

export function Ingredients() {
  const [ingredients, setIngredients] = useState([]);

  const getAllUsers = () => {
    onSnapshot(collection(db, "Alimentos"), (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setIngredients(docs);
    });
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div className="flex w-full">
      <div className="w-full">
        <Header ContentTitle={"Ingredientes"}></Header>
        <div class="w-full">
            <div class="mx-5 my-5 flex flex-col h-full">
              <div class="flex justify-between">
                <Search placeholder={"Search Ingredients"}></Search>
                <ButtonAddIngredient></ButtonAddIngredient>
              </div>
              <TableIngredient ingredients={ingredients}></TableIngredient>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Ingredients;

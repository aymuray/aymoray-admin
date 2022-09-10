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
      <div class="w-full h-full overflow-y-hidden">
        <Header ContentTitle={"Ingredientes"}></Header>
            <div class="static mx-5 my-1">
              <div class="flex justify-between">
                <Search placeholder={"Search Ingredients"}></Search>
                <ButtonAddIngredient></ButtonAddIngredient>
              </div>
              <TableIngredient ingredients={ingredients}></TableIngredient>
            </div>
    </div>
  );
}

export default Ingredients;

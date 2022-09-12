import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Container } from "../components/Container/Container";
import Header from "../components/Header/Header";
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
    <div className="main">
      <Header ContentTitle={"Ingredientes"}></Header>
      <Container>
      <div className="container-top">
        <Search placeholder={"Buscar ingrediente"}></Search>
        <ButtonAddIngredient></ButtonAddIngredient>
      </div>
      <div className="container-body">
        <TableIngredient ingredients={ingredients}></TableIngredient>
      </div>
      </Container>
     
    </div>
  );
}

export default Ingredients;

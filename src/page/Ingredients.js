import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Container } from "../components/Container/Container";
import Header from "../components/Header/Header";
import { ButtonAddIngredient } from "../components/Ingredients/ButtonAddIngredient";
import { TableIngredient } from "../components/Ingredients/TableIngredient";
import { Pagination } from "../components/Pagination/Pagination";
import { Search } from "../components/Search";
import { db } from "../firebase";

export function Ingredients() {
  const [numberElements, setnumberElements] = useState(10)

  const [ingredients, setIngredients] = useState([]);

  const getAllIngredients= () => {
    onSnapshot(collection(db, "Alimentos"), (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setIngredients(docs);
    });
  };

  useEffect(() => {
    getAllIngredients();
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
        <Pagination selected={1} length={71} numberElements={10}></Pagination>
      </div>
      </Container>
     
    </div>
  );
}

export default Ingredients;

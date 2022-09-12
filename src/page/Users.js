import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Container } from "../components/Container/Container";
import Header from "../components/Header/Header";
import { Search } from "../components/Search";
import { ButtonAddUser } from "../components/Users/ButtonAddUser";
import { TableUsers } from "../components/Users/TableUsers";
import { db } from "../firebase";

export function Users() {
  const [users, setUsers] = useState([]);

  const getAllUsers = () => {
    onSnapshot(collection(db, "usuarios"), (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setUsers(docs);
    });
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="main">
      <Header ContentTitle={"Usuarios"}></Header>
      <Container>
      <div className="container-top">
        <Search placeholder={"Buscar usuario"}></Search>
        <ButtonAddUser></ButtonAddUser>
      </div>
      <div className="container-body">
        <TableUsers users={users}></TableUsers>
      </div>
      </Container>
     
    </div>
  );
}

export default Users;

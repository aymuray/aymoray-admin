import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Search } from "../components/Search";
import { ButtonAddUser } from "../components/Users/ButtonAddUser";
import { TableUsers } from "../components/Users/TableUsers";
import { db } from "../firebase";

export function Users() {
  const [users, setUsers] = useState([]);

  const getAllUsers = () => {
    onSnapshot(collection(db, "usuarios"), (querySnapshot) =>{
      const docs = [];
      querySnapshot.forEach(doc => {
        docs.push({...doc.data(), id:doc.id})
      })
      setUsers(docs)
    });
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="flex w-full">
      <div className="w-full">
        <Header ContentTitle={"Users"}></Header>
        <div class="w-full">
            <div class="mx-5 my-5">
              <div class="flex justify-between">
                <Search placeholder={"Search Users"}></Search>
                <ButtonAddUser></ButtonAddUser>
              </div>
              <TableUsers users={users}></TableUsers>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Users;

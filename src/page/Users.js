import Header from "../components/Header";
import { ButtonAddUser } from "../components/Users/ButtonAddUser";
import { SearchUser } from "../components/Users/SearchUser";
import { TableUsers } from "../components/Users/TableUsers";

export function Users() {
  return (
    <div className="flex w-full">
      <div className="w-full">
        <Header ContentTitle={"Users"}></Header>
        <div class="w-full">
          <main>
            <div class="mx-5 my-5">
              <div class="flex justify-between">
                <SearchUser></SearchUser>
                <ButtonAddUser></ButtonAddUser>
              </div>
              <TableUsers></TableUsers>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Users;

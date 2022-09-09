import Header from "../components/Header";

export function Users() {
  return (
    <div className="flex w-full">
      <div className="w-full">
        <Header ContentTitle={"Users"}></Header>
        <div class="w-full">
          <main>
            <div class="mx-5 my-5">
              <label> Usuarios </label>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Users;
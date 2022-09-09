import Header from "../components/Header";

export function Ingredients() {
  return (
    <div className="flex w-full">
      <div className="w-full">
        <Header ContentTitle={"Ingredientes"}></Header>
        <div class="w-full">
          <main>
            <div class="mx-5 my-5">
              <label> Ingredientes </label>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Ingredients;
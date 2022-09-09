import Header from "../components/Header";

export function Home() {
  return (
    <div className="flex w-full">
      <div className="w-full">
        <Header ContentTitle={"Dashboard"}></Header>
        <div class="w-full">
          <main>
            <div class="mx-5 my-5">
              <label> Dashboard </label>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Home;

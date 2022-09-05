import Header from "./Header";
import { Sidebar } from "./Sidebar";

export function Home() {

  return (
    <div className="flex w-full">
      <Sidebar className="fit-content"></Sidebar>
      <Header ContentTitle={"Dashboard"}></Header>
    </div>
  );
}

export default Home
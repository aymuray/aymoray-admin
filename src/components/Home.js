import { Content } from "./Content";
import Header from "./Header";
import { Sidebar } from "./Sidebar";

export function Home() {

  return (
    <div className="flex w-full">
      <Sidebar className="fit-content"></Sidebar>
      <div className="w-full">
      <Header ContentTitle={"Dashboard"}></Header>
      <Content></Content>
      </div>
    </div>
  );
}

export default Home
import { Container } from "../components/Container/Container";
import Header from "../components/Header/Header";

export function Home() {
  return (
    <div className="main">
    <Header ContentTitle={"Usuarios"}></Header>
    <Container></Container>
  </div>
  );
}

export default Home;

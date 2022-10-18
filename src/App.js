import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Main from "./pages/Main";

function App() {
  return (
    <Container className="mt-lg-5">
      <Header />
      <Main />
    </Container>
  );
}

export default App;

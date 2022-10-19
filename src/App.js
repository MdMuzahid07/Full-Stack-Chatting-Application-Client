import { Container } from "react-bootstrap";
import BottomNav from "./components/header/BottomNav";
import Main from "./pages/Main";


function App() {
  return (
    <Container className=" border border-2 px-0">
      <Main />
      <BottomNav />
    </Container>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import BottomNav from "./components/header/BottomNav";
import Login from "./pages/LoginSignup/Login";
import SignUp from "./pages/LoginSignup/SignUp";
import Main from "./pages/Main";


function App() {
  return (
    <section className=" border border-2 px-0">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Main />
      <BottomNav />
    </section>
  );
}

export default App;

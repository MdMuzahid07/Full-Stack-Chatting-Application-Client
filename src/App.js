import { Route, Routes, useNavigate } from "react-router-dom";
import BottomNav from "./components/header/BottomNav";
import Login from "./pages/LoginSignup/Login";
import SignUp from "./pages/LoginSignup/SignUp";
import Main from "./pages/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import ReactToastContainer from "./components/reactToastContainer/ReactToastContainer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./authentication/firebaseInitial";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      }
    });
  }, []);

  return (
    <section className="px-0">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Main />
      <BottomNav />
      <ReactToastContainer />
    </section>
  );
}

export default App;

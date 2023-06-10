import { Fragment } from "react";
import Home from "./screens/home/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HowITworks from "./screens/how-it-works/HowITworks";
import Plan from "./screens/plan/Plan";
import AboutUs from "./screens/about-us/AboutUs";
import Login from "./screens/login/Login";
import SignUp from "./screens/signup/SignUp";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="how-it-works" element={<HowITworks />}></Route>
        <Route path="plan" element={<Plan />}></Route>
        <Route path="about-us" element={<AboutUs />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;

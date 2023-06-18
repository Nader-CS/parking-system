import Home from "./screens/home/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HowITworks from "./screens/how-it-works/HowITworks";
import Plan from "./screens/plan/Plan";
import AboutUs from "./screens/about-us/AboutUs";
import Login from "./screens/login/Login";
import SignUp from "./screens/signup/SignUp";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utilities/theme";
import Footer from "./components/Footer/Footer";
import PickGarage from "./screens/pick-garage/pickGarage";
import CarOwner from "./screens/signup/CarOwner/CarOwner";
import GarageOwner from "./screens/signup/GarageOwner/GarageOwner";
import GarageOwnerTwo from "./screens/signup/GarageOwner/GarageOwnerTwo";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="how-it-works" element={<HowITworks />}></Route>
        <Route path="plan" element={<Plan />}></Route>
        <Route path="about-us" element={<AboutUs />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />} ></Route>
        <Route path="signup/garageOwner" element={<GarageOwner />}></Route>
        <Route path="signup/garageDetails" element={<GarageOwnerTwo />}></Route>
        <Route path="signup/carOwner" element={<CarOwner />}></Route>
        <Route path="search" element={<PickGarage />}></Route>
        {/* <Route path="checkout" element={<Checkout />}></Route> */}
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

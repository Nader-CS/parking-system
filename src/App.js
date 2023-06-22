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
import { useTranslation } from "react-i18next";
import Reservation from "./screens/reservation/Reservation";
import Completion from "./components/Reservation/Payment-Stripe/Completion";
import NotFound from "./components/Not-found/NotFound";
import { useEffect } from "react";
import { off, onValue, ref } from "firebase/database";
import { realDb } from "./services/firebase/firebase-config";
import { listenToValueChange } from "./services/reservationServices";

function App() {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();

  useEffect(() => {
    const databaseRef = ref(realDb, "user-collection");
    console.log(databaseRef);
    const listener = onValue(databaseRef, (snapshot) => {
      listenToValueChange(snapshot);
    });

    // Clean up the listener when the component unmounts
    return () => {
      off(databaseRef, listener);
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="how-it-works" element={<HowITworks />}></Route>
        <Route path="plan" element={<Plan />}></Route>
        <Route path="about-us" element={<AboutUs />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="signup/garageOwner" element={<GarageOwner />}></Route>
        <Route path="signup/garageDetails" element={<GarageOwnerTwo />}></Route>
        <Route path="signup/carOwner" element={<CarOwner />}></Route>
        <Route path="search" element={<PickGarage />}></Route>
        <Route path="reservation" element={<Reservation />}></Route>
        <Route path="completion" element={<Completion />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

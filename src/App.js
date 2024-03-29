import Home from "./screens/home/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HowITworks from "./screens/how-it-works/HowITworks";
import Contact from "./screens/contact/Contact";
import AboutUs from "./screens/about-us/AboutUs";
import Login from "./screens/login/Login";
import Profile from "./screens/profile/Profile";
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
import { useDispatch } from "react-redux";
import { userValid } from "./redux/slices/loginSlice";
import Dashboard from "./screens/dashboard/Dashboard";
import AdminDashboard from "./components/AdminDashboard/adminDashboard";

function App() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();

  useEffect(() => {
    dispatch(userValid());
  }, []);

  useEffect(() => {
    const databaseRef = ref(realDb, "user-collection");
    // console.log(databaseRef);
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
        <Route path="contact" element={<Contact />}></Route>
        <Route path="about-us" element={<AboutUs />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="signup/garageOwner" element={<GarageOwner />}></Route>
        <Route path="signup/garageDetails" element={<GarageOwnerTwo />}></Route>
        <Route path="signup/carOwner" element={<CarOwner />}></Route>
        <Route path="search" element={<PickGarage />}></Route>
        <Route path="reservation" element={<Reservation />}></Route>
        <Route path="completion" element={<Completion />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

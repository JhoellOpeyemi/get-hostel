import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./components/pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AccountNotification from "./components/AccountNotification";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import UserProfile from "./components/pages/UserProfile";
import Faq from "./components/pages/Faqs";

import "./css/styles.css";

function App() {
  const [profile, setProfile] = useState(false);
  const [signin, setSignin] = useState({ email: "", password: "" });
  const [loader, setLoader] = useState(false);
  const [loaderText, setLoaderText] = useState("");

  let navigate = useNavigate();

  const handleEmail = (e) => {
    setSignin({ ...signin, email: e.target.value });
  };

  const handlePassword = (e) => {
    setSignin({ ...signin, password: e.target.value });
  };

  const handleSubmit = (e, state) => {
    e.preventDefault();
    setProfile(true);
    setLoader(true);
    navigate("/profile");
    setTimeout(() => {
      setLoader(false);
    }, 2000);

    if (state === "signin") {
      setLoaderText("Welcome Back!");
    } else {
      setLoaderText("Account Created!");
    }
  };

  return (
    <>
      <Header profile={profile} />

      {loader && <AccountNotification loaderText={loaderText} />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/faqs" element={<Faq />} />

        <Route
          path="/signin"
          element={
            <SignIn
              handleEmail={handleEmail}
              handlePassword={handlePassword}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route
          path="/signup"
          element={<SignUp handleSubmit={handleSubmit} />}
        />
        <Route path="/profile" element={<UserProfile profile={profile} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

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
import StudentSignUp from "./components/pagesComponents/StudentSignUp";
import AgentSignUp from "./components/pagesComponents/AgentSignUp";

import "./css/styles.css";
import PostHostel from "./components/pages/PostHostel";

function App() {
  const [profile, setProfile] = useState(false);
  const [loader, setLoader] = useState(false);
  const [loaderText, setLoaderText] = useState("");

  let navigate = useNavigate();

  const handleSubmit = (e, text) => {
    e.preventDefault();

    if (text === "signin") {
      setLoaderText("Welcome Back!");
      updateStates();
    } else {
      setLoaderText("Account Created!");
      updateStates();
    }
  };

  const updateStates = () => {
    setProfile(true);
    setLoader(true);
    navigate("/profile");
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };

  return (
    <>
      <Header profile={profile} />

      {loader && <AccountNotification loaderText={loaderText} />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/post-hostel" element={<PostHostel />} />

        <Route path="/faqs" element={<Faq />} />

        <Route
          path="/signin"
          element={<SignIn handleSubmit={handleSubmit} />}
        />
        <Route path="/signup" element={<SignUp handleSubmit={handleSubmit} />}>
          <Route
            index
            element={<StudentSignUp handleSubmit={handleSubmit} />}
          />
          <Route
            path="student"
            element={<StudentSignUp handleSubmit={handleSubmit} />}
          />
          <Route
            path="agent"
            element={<AgentSignUp handleSubmit={handleSubmit} />}
          />
        </Route>
        <Route path="/profile" element={<UserProfile profile={profile} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

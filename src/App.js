import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import UserProfile from "./components/pages/UserProfile";

import "./css/styles.css";

function App() {
  const [profile, setProfile] = useState(false);
  const [signin, setSignin] = useState({ email: "", password: "" });

  const handleEmail = (e) => {
    setSignin({ ...signin, email: e.target.value });
  };
  const handlePassword = (e) => {
    setSignin({ ...signin, password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signin.email === "admin@admin.com" && signin.password === "admin") {
      setProfile(true);
    }
  };

  return (
    <Router>
      <Header profile={profile} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/signin"
          element={
            <SignIn
              signin={signin}
              handleEmail={handleEmail}
              handlePassword={handlePassword}
              handleSubmit={handleSubmit}
              profile={profile}
            />
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

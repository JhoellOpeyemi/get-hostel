import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";

import "./css/styles.css";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

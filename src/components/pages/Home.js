import React from "react";

import Hostels from "../Hostels";
import Main from "../pagesComponents/HomeMain";

const Home = () => {
  return (
    <>
      <Main />
      <div className="container">
        <Hostels />
      </div>
    </>
  );
};

export default Home;

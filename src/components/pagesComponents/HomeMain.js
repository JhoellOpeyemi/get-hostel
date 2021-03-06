import React from "react";

const Main = () => {
  return (
    <div className="main-container">
      <main className="main">
        <div className="overlay"></div>
        <h1 className="hero-text">Hostel at your fingertips</h1>
        <div className="search-input-group">
          <input
            type="text"
            placeholder="I'm looking for a hostel in"
            className="search-input"
          />
          <div className="input-stick"></div>
        </div>
      </main>
    </div>
  );
};

export default Main;

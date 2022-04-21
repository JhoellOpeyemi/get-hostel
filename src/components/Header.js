import React, { useState } from "react";
import { Link } from "react-router-dom";

import ProfileIcon from "./pagesComponents/ProfileIcon";

const Header = ({ profile }) => {
  const [nav, setNav] = useState(false);

  // updates the nav state
  const openNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <header className="header">
      <div className="logo-nav-wrapper">
        <Link
          to="/"
          className={nav ? "logo nav-active" : "logo"}
          onClick={closeNav}
        >
          Site name
        </Link>
        <nav className={nav ? "nav active" : "nav"}>
          <div className="nav-links-wrapper">
            <a
              href="/"
              className={nav ? "nav-links active" : "nav-links"}
              onClick={closeNav}
            >
              Available hostels
            </a>
            <a
              href="/"
              className={nav ? "nav-links active" : "nav-links"}
              onClick={closeNav}
            >
              Roommate search
            </a>
            <Link
              to="/post-hostel"
              className={nav ? "nav-links active" : "nav-links"}
              onClick={closeNav}
            >
              Post Hostel
            </Link>
            <Link
              to="/faqs"
              className={nav ? "nav-links active" : "nav-links"}
              onClick={closeNav}
            >
              FAQS
            </Link>
            {profile ? (
              <Link to="/profile" onClick={closeNav}>
                <ProfileIcon />
              </Link>
            ) : (
              <Link
                to="/signin"
                className={nav ? "nav-links active" : "nav-links"}
                onClick={closeNav}
              >
                Sign in
              </Link>
            )}
          </div>
        </nav>
        <button className="hamburger" onClick={openNav}>
          {nav ? (
            //   close icon when hamburger is clicked
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.625 7.62503C8.09382 7.15635 8.72959 6.89307 9.3925 6.89307C10.0554 6.89307 10.6912 7.15635 11.16 7.62503L20 16.465L28.84 7.62503C29.3115 7.16964 29.943 6.91765 30.5985 6.92335C31.254 6.92904 31.881 7.19197 32.3445 7.65549C32.8081 8.11901 33.071 8.74604 33.0767 9.40153C33.0824 10.057 32.8304 10.6885 32.375 11.16L23.535 20L32.375 28.84C32.8304 29.3115 33.0824 29.943 33.0767 30.5985C33.071 31.254 32.8081 31.8811 32.3445 32.3446C31.881 32.8081 31.254 33.071 30.5985 33.0767C29.943 33.0824 29.3115 32.8304 28.84 32.375L20 23.535L11.16 32.375C10.6885 32.8304 10.057 33.0824 9.4015 33.0767C8.74601 33.071 8.11898 32.8081 7.65546 32.3446C7.19194 31.8811 6.92901 31.254 6.92332 30.5985C6.91762 29.943 7.16961 29.3115 7.625 28.84L16.465 20L7.625 11.16C7.15632 10.6912 6.89304 10.0554 6.89304 9.39253C6.89304 8.72962 7.15632 8.09385 7.625 7.62503Z"
                fill="#BBBBBB"
              />
            </svg>
          ) : (
            // normal state of hamburger before clicked
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 10C6 9.46957 6.21071 8.96086 6.58579 8.58579C6.96086 8.21071 7.46957 8 8 8H32C32.5304 8 33.0391 8.21071 33.4142 8.58579C33.7893 8.96086 34 9.46957 34 10C34 10.5304 33.7893 11.0391 33.4142 11.4142C33.0391 11.7893 32.5304 12 32 12H8C7.46957 12 6.96086 11.7893 6.58579 11.4142C6.21071 11.0391 6 10.5304 6 10ZM6 20C6 19.4696 6.21071 18.9609 6.58579 18.5858C6.96086 18.2107 7.46957 18 8 18H32C32.5304 18 33.0391 18.2107 33.4142 18.5858C33.7893 18.9609 34 19.4696 34 20C34 20.5304 33.7893 21.0391 33.4142 21.4142C33.0391 21.7893 32.5304 22 32 22H8C7.46957 22 6.96086 21.7893 6.58579 21.4142C6.21071 21.0391 6 20.5304 6 20ZM6 30C6 29.4696 6.21071 28.9609 6.58579 28.5858C6.96086 28.2107 7.46957 28 8 28H32C32.5304 28 33.0391 28.2107 33.4142 28.5858C33.7893 28.9609 34 29.4696 34 30C34 30.5304 33.7893 31.0391 33.4142 31.4142C33.0391 31.7893 32.5304 32 32 32H8C7.46957 32 6.96086 31.7893 6.58579 31.4142C6.21071 31.0391 6 30.5304 6 30Z"
                fill="black"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;

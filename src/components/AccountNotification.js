import React from "react";

const AccountNotification = ({ loaderText }) => {
  return (
    <div className="account-notification">
      <svg
        width="65"
        height="65"
        viewBox="0 0 65 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="account-notification-icon"
      >
        <path
          d="M57.8906 35.5468C55.8594 45.703 48.2016 55.2661 37.4562 57.403C32.2156 58.4467 26.7792 57.8103 21.9213 55.5846C17.0633 53.3589 13.0314 49.6572 10.3996 45.0067C7.76778 40.3561 6.67029 34.9938 7.26338 29.6832C7.85647 24.3727 10.1099 19.3846 13.7028 15.4293C21.0722 7.31238 33.5156 5.07801 43.6719 9.14051"
          stroke="#3338A4"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.3594 31.4844L33.5156 41.6406L57.8906 15.2344"
          stroke="#3338A4"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <p className="account-notification-text">{loaderText}</p>
    </div>
  );
};

export default AccountNotification;

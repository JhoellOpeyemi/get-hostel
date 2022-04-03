import React from "react";

const Hostel = ({ name, lga, state, occupants, price }) => {
  return (
    <button className="hostel-card">
      <div className="hostel-image-group"></div>
      <div className="hostel-details-group">
        <div className="hostel-name-occupants">
          <h4 className="hostel-name">
            {name}{" "}
            <span className="lga-state">
              {lga}, {state}
            </span>
          </h4>
          <p className="occupants">{occupants}</p>
        </div>
        <p className="price">{price}</p>
      </div>
    </button>
  );
};

export default Hostel;

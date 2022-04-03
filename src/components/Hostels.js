import React, { useState, useEffect } from "react";

import HostelCard from "./HostelCard";

import { hostel } from "./Example";

const Hostels = () => {
  const [hostelData, setHostelData] = useState([]);

  useEffect(() => {
    updateHostel();
  }, []);

  const updateHostel = () => {
    setHostelData(hostel);
  };

  console.log(hostelData);

  return (
    <div className="hostel-section">
      <h3 className="section-title">Available Hostels</h3>
      <div className="hostel-group">
        {hostelData.map((hostel) => {
          return (
            <HostelCard
              key={hostel.id}
              name={hostel.name}
              lga={hostel.lga}
              state={hostel.state}
              occupants={hostel.occupants}
              price={hostel.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Hostels;

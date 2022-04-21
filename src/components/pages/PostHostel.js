import React, { useState } from "react";
import InputBox from "../InputBox";

const PostHostel = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFiles = (e) => {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages(imagesArray);
  };
  return (
    <div className="container">
      <main className="form-wrapper">
        <h1 className="form-title">Post A Hostel For Rent</h1>
        <form className="form post-form">
          <InputBox
            label="Name of hostel"
            type="text"
            name="hostel-name"
            id="hostel-name-input"
          />
          <InputBox
            label="Address"
            type="text"
            name="address"
            id="address-input"
          />
          <div className="input-section">
            <InputBox
              label="Local Government Area"
              type="text"
              name="lga"
              id="lga-input"
            />
            <InputBox label="State" type="text" name="state" id="state-input" />
          </div>

          <div className="input-group">
            <label htmlFor="image-input" className="label">
              Pictures of hostel ( include pictures of every room, e.g bedroom,
              kitchen, toilet, etc )
            </label>
            <input
              type="file"
              name="images"
              id="image-input"
              accept="image/*"
              className="input"
              onChange={onSelectFiles}
              multiple
            />
          </div>

          <div className="selected-images">
            {selectedImages &&
              selectedImages.map((image, index) => {
                return (
                  <img
                    src={image}
                    alt=""
                    key={image}
                    className="selected-image"
                  />
                );
              })}
          </div>

          <div className="input-section">
            <InputBox
              label="Number of occupants"
              type="number"
              name="occupants"
              id="occupants-input"
            />
            <InputBox
              label="Price ( Amount / duration )"
              type="text"
              name="price"
              id="price-input"
              placeholder="e.g #100,000 / year"
            />
          </div>

          <div className="input-group">
            <label htmlFor="hostel-details" className="label">
              What does the hostel have? List all details
            </label>
            <textarea
              name="hostel-details"
              id="hostel-details"
              className="hostel-details-textarea"
              placeholder="e.g Kitchen&#10;Stable Electricity"
            ></textarea>
          </div>

          <button type="submit" className="form-btn post-btn">
            Post
          </button>
        </form>
      </main>
    </div>
  );
};

export default PostHostel;

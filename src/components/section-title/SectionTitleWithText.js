import PropTypes from "prop-types";
import React from "react";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
          <h5>We provide</h5>
          <h1>Well-grounded electrical Services</h1>
          <p>
          With over 30 years of experience we offer our customers expert customer service and quality workmanship at affordable prices. Don’t risk accidents or malfunctions, have us do the electrical work!{" "}
          </p>
          <br></br>
          <br></br>
          <h5>
         Our services in the Geelong and Golden Plains areas include: {" "}
          </h5>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;

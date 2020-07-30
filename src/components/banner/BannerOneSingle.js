import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const BannerOneSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className="col-lg-4 col-md-4">
      <div
        className={`single-banner ${spaceBottomClass ? spaceBottomClass : ""}`}
      >
        <Link >
          <img src={data.image} alt="" />
        </Link>
        <div className="banner-content">
          <h3>{data.title}</h3>
        </div>
      </div>
    </div>
  );
};

BannerOneSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default BannerOneSingle;

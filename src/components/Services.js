import PropTypes from "prop-types";
import React, { Fragment } from "react";
import SectionTitleWithText from "../components/section-title/SectionTitleWithText";
import BannerOne from "../wrappers/banner/BannerOne";

const Services = ({ location }) => {
    const { pathname } = location;
  
    return (
      <Fragment>

        {/* Intro/Welcome Services Page - section title with text*/}
        <SectionTitleWithText spaceTopClass="pt-100" spaceBottomClass="pb-95" />

        {/* banner Types of Clients*/}
        <BannerOne spaceBottomClass="pb-70" />
  
      </Fragment>
    );
  };
  
  Services.propTypes = {
    location: PropTypes.object
  };
  
  export default Services;
  
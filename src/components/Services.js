import PropTypes from "prop-types";
import React, { Fragment } from "react";
import SectionTitleWithText from "../components/section-title/SectionTitleWithText";

const Services = ({ location }) => {
    const { pathname } = location;
  
    return (
      <Fragment>

          {/* Intro/Welcome Services Page - section title with text*/}
          <SectionTitleWithText spaceTopClass="pt-100" spaceBottomClass="pb-95" />
  
      </Fragment>
    );
  };
  
  Services.propTypes = {
    location: PropTypes.object
  };
  
  export default Services;
  
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import SectionTitleWithText from "../components/section-title/SectionTitleWithText";
import BannerOne from "../wrappers/banner/BannerOne";
import TextGridOne from "../wrappers/text-grid/TextGridOne";
import TestimonialOne from "../wrappers/testimonial/TestimonialOne";
import SectionTitleTwo from "../components/section-title/SectionTitleTwo";

const Services = ({ location }) => {
    const { pathname } = location;
  
    return (
      <Fragment>

        {/* Welcome Services Page - section title with text*/}
        <SectionTitleWithText spaceTopClass="pt-50" spaceBottomClass="pb-95" />

        {/* banner Client Types*/}
        <BannerOne spaceBottomClass="pb-70" />

        {/* Services Info - text grid */}
        <TextGridOne spaceBottomClass="pb-70" />

        {/* Clients Testimonials */}
        <TestimonialOne
        spaceBottomClass="pb-95"
        testimonialClass="single-testimonial-2"
        />

         {/* Call to Action*/}
         <div className="container">
        <SectionTitleTwo
          titleText="Call us today: 0411 111 111"
          subTitleText="Switch to us, and you'll be glad you did!"
          positionClass="text-center"
          spaceClass="mb-90"
        />
        </div>
  
      </Fragment>
    );
  };
  
  Services.propTypes = {
    location: PropTypes.object
  };
  
  export default Services;
  
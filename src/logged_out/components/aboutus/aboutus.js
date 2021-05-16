import React, { Fragment} from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";


const AboutUs = (props) => {
  //   const { classes } = props;

  return (
    <Fragment>
      <HeadSection />
    </Fragment>
  );
};

AboutUs.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default AboutUs;

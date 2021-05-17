import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";

const AboutUs = (props) => {
  const { classes, width, selectAbout } = props;

  useEffect(() => {
    selectAbout();
  }, [selectAbout]);

  return (
    <Fragment>
      <HeadSection classes={classes} width={width} />
    </Fragment>
  );
};

AboutUs.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  selectAbout: PropTypes.func.isRequired,
};

export default AboutUs;

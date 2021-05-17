import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";

const Faqs = (props) => {
  const { classes, selectFaqs } = props;

  useEffect(() => {
    selectFaqs();
  }, [selectFaqs]);

  return (
    <Fragment>
      <HeadSection classes={classes} />
    </Fragment>
  );
};

Faqs.propTypes = {
  classes: PropTypes.object.isRequired,
  selectFaqs: PropTypes.string.isRequired,
};

export default Faqs;

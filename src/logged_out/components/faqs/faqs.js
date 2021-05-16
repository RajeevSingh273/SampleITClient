import React, { Fragment} from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";


const Faqs = (props) => {
    const { classes } = props;
  return (
    <Fragment>
      <HeadSection classes={classes}/>
    </Fragment>
  );
};

Faqs.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default Faqs;

import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import HowItWorks from "./HowItWorks";
import FeatureSection from "./FeatureSection";

function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
      <HeadSection />
      <HowItWorks />
      <FeatureSection />
    </Fragment>
  );
}

Home.propTypes = {
  classes: PropTypes.func.isRequired,
  selectHome: PropTypes.func.isRequired,
};

export default Home;

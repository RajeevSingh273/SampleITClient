import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Typography,
  isWidthUp,
  Box,
  Card,
  withStyles,
} from "@material-ui/core";
import classNames from "classnames";
const iconSize = 30;

const styles = (theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto",
    },
  },
  wrapper: {
    position: "relative",
    backgroundColor: "#FDBC00",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
  container: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(1),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(1),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(1),
    },
  },
  containerFix: {
    [theme.breakpoints.up("lg")]: {
      maxWidth: "none !important",
    },
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
});

function HowItWorks(props) {
  const { classes, theme, width } = props;
  return (
    <Fragment>
      <div className={classes.wrapper}>
        <div className={classNames("container-fluid", classes.container)}>
          <div className={classNames(classes.containerFix, "container")}>
            <Typography>
              <Box fontWeight={700} fontSize={30}  align="center">
                How the SAMPLE-IT Program works!
              </Box>
            </Typography>
            <Grid item xs={12} md={12}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                height="100%"
              >
                <Box mb={4}>
                  <Typography variant={isWidthUp("lg", width) ? "h5" : "h6"}>
                    1. CONSUMERS REGISTER WITH UP-TO-DATE PROFILE.
                  </Typography>
                </Box>
                <div>
                  <Box mb={2}>
                    <Typography
                      variant={isWidthUp("lg", width) ? "h6" : "body1"}
                      color="textSecondary"
                    >
                      At SampleIT, we help customers to achieve far better ROI
                      vs. traditional sampling.
                    </Typography>
                  </Box>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                height="100%"
              >
                <Box mb={4}>
                  <Typography variant={isWidthUp("lg", width) ? "h5" : "h6"}>
                    2. CONSUMERS CONTACT TO SAMPLE-IT.
                  </Typography>
                </Box>
                <div>
                  <Box mb={2}>
                    <Typography
                      variant={isWidthUp("lg", width) ? "h6" : "body1"}
                      color="textSecondary"
                    >
                      At SampleIT, we helps customers to achieve far better ROI
                      vs. traditional sampling.
                    </Typography>
                  </Box>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                height="100%"
              >
                <Box mb={4}>
                  <Typography variant={isWidthUp("lg", width) ? "h5" : "h6"}>
                    3. CONSUMERS SAMPLE TO SAMPLE-IT, AND CHOOSE TARGETING
                    CRITERIA.
                  </Typography>
                </Box>
                <div>
                  <Box mb={2}>
                    <Typography
                      variant={isWidthUp("lg", width) ? "h6" : "body1"}
                      color="textSecondary"
                    >
                      At SampleIT, we helps customers to achieve far better ROI
                      vs. traditional sampling.
                    </Typography>
                  </Box>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                height="100%"
              >
                <Box mb={4}>
                  <Typography variant={isWidthUp("lg", width) ? "h5" : "h6"}>
                    4. SAMPLES ARE SENT DIRECT TO CLIENT.
                  </Typography>
                </Box>
                <div>
                  <Box mb={2}>
                    <Typography
                      variant={isWidthUp("lg", width) ? "h6" : "body1"}
                      color="textSecondary"
                    >
                      At SampleIT, we helps customers to achieve far better ROI
                      vs. traditional sampling.
                    </Typography>
                  </Box>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                height="100%"
              >
                <Box mb={4}>
                  <Typography variant={isWidthUp("lg", width) ? "h5" : "h6"}>
                    5. FOLLOW-UP DELEVERY TRACKING STUDY TO MEASURE ROI,
                    INSIGHTS AND COLLECT RATINGS/REVIEWS..
                  </Typography>
                </Box>
                <div>
                  <Box mb={2}>
                    <Typography
                      variant={isWidthUp("lg", width) ? "h6" : "body1"}
                      color="textSecondary"
                    >
                      At SampleIT, we helps customers to achieve far better ROI
                      vs. traditional sampling.
                    </Typography>
                  </Box>
                </div>
              </Box>
            </Grid>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

HowItWorks.propTypes = {
  classes: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(HowItWorks);

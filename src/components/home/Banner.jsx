import React from "react";
import Carousel from "react-material-ui-carousel";
import { bannerData } from "../../constants/data";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  image: {
    width: "100%",
    height: 280,
    [theme.breakpoints.down("sm")]: {
      objectFit: "cover",
      height: 180,
    },
    [theme.breakpoints.down("md")]: {
      objectFit: "cover",
      height: 220,
    },
  },
}));

export default function Banner() {
  const classes = useStyle();
  return (
    <Carousel
      autoPlay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          background: "#FFFFFF",
          color: "#494949",
          borderRadius: 0,
        },
      }}
    >
      {bannerData.map((image) => (
        <img src={image} className={classes.image} />
      ))}
    </Carousel>
  );
}

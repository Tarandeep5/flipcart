import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import Countdown from "react-countdown";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const useStyle = makeStyles((theme) => ({
  image: {
    height: 150,
  },
  component: {
    marginTop: 12,
    background: "#FFFFFF",
  },
  deal: {
    padding: "15px 20px",
    fontFamily: "unset",
    fontSize: 14,
    display: "flex",
    fontWeight: "600",
  },
  dealText: {
    fontSize: 22,
  },
  timer: {
    color: "#7f7f7f",
    marginLeft: 10,
    display: "flex",
    alignItems: "center",
  },
  button: {
    marginLeft: "auto",
  },
  text: {
    fontSize: 14,
    color: "black",
  },
  wrapper: {
    padding: "35px 15px",
  },
  timer: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function Slide({ timer, title, products }) {
  const classes = useStyle();
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span className={classes.timer}>
        {hours} : {minutes} : {seconds} Left
      </span>
    );
  };

  return (
    <Box style={{ marginBottom: 40 }} className={classes.component}>
      <Box className={classes.deal}>
        <Typography
          style={{
            fontSize: 22,
            fontWeight: 600,
            lineHeight: "32px",
            marginRight: 25,
          }}
          className={classes.dealText}
        >
          {" "}
          {title}
        </Typography>
        {timer && (
          <Box className={classes.timer}>
            <React.Fragment>
              <img src={timerURL} style={{ width: 24 }} />
              <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
            </React.Fragment>
          </Box>
        )}
        <Button
          variant="contained"
          style={{
            marginLeft: "auto",
            background: "#2874f0",
            borderRadius: 1,
            fontSize: 13,
          }}
          className={classes.button}
        >
          View All
        </Button>
      </Box>
      <Divider />

      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        //  removeArrowOnDeviceType={["mobile", "tablet"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products.map((product) => (
          <Link to={`product/${product.id}`}>
            <Box textAlign="center" className={classes.wrapper}>
              <img className={classes.image} src={product.url} />
              <Typography
                classname={classes.text}
                style={{
                  fontFamily: "unset",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#212121",
                }}
              >
                {product.title.shortTitle}{" "}
              </Typography>
              <Typography
                classname={classes.text}
                style={{
                  fontFamily: "unset",
                  fontSize: 14,

                  color: "green",
                }}
              >
                {product.discount}{" "}
              </Typography>
              <Typography
                classname={classes.text}
                style={{
                  fontFamily: "unset",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#212121",
                  opacity: ".6",
                }}
              >
                {" "}
                {product.tagline}
              </Typography>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Box>
  );
}

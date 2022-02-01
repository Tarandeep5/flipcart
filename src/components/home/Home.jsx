import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Banner from "./Banner";
import MidSecion from "./MidSecion";
import Navbar from "./Navbar";
import Slide from "./Slide";
import { getProducts as listProducts } from "../../redux/actions/productActions";
//import { products } from "../../constants/data";

const useStyle = makeStyles((theme) => ({
  component: {
    padding: 10,
    background: "#F2F2F2",
  },
  rightWrapper: {
    background: "#FFFFFF",
    padding: 5,
    margin: "12px 0 0 10px",
    width: "17%",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  rightcomp: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));

export default function Home() {
  const classes = useStyle();
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";

  const { products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Box className={classes.component}>
        <Banner />

        <Box style={{ display: "flex" }}>
          <Box className={classes.rightcomp} style={{ width: "82%" }}>
            <Slide timer={true} title="Deal of the Day" products={products} />
          </Box>
          <Box className={classes.rightWrapper}>
            <img src={adURL} style={{ width: 230 }} />
          </Box>
        </Box>
        <MidSecion />
        <Slide timer={false} title="Discounts for You" products={products} />
        <Slide timer={false} title="Suggested Items" products={products} />
        <Slide timer={false} title="Top Selection" products={products} />
        <Slide timer={false} title="Recommended Items" products={products} />
        <Slide timer={false} title="Bestsellers" products={products} />
      </Box>
    </div>
  );
}

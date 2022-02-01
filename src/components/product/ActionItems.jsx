import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import React from "react";
import clsx from "clsx";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { addToCart } from "../../redux/actions/cartActions";
import Cart from "../cart/Cart";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

const useStyle = makeStyles((theme) => ({
  leftContainer: {
    padding: "50px 0 0 60px",
    [theme.breakpoints.down("md")]: {
      padding: "20px 40px",
    },
  },
  image: {
    padding: "15px 20px",
    border: "1px solid #f0f0f0 ",
    width: "95%",
  },
  button: {
    height: 50,
    width: "46%",
  },

  addToCart: {
    background: "#ff9f00 !important",
    marginRight: "10px !important",
    borderRadius: 2,
  },
  buyNow: {
    background: "#fb641b !important",
    borderRadius: 2,
  },
}));

function ActionItems(props) {
  const classes = useStyle();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart(props.product.id));
    navigate("/cart");
  };

  const buyNow = async () => {
    let response = await payUsingPaytm({
      amount: 500,
      email: "tarandeepsingh7837420@gmail.com",
    });

    var information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: response,
    };

    post(information);
  };

  return (
    <Box className={classes.leftContainer}>
      {" "}
      <br />
      <img src={props.product.detailUrl} alt="" className={classes.image} />
      <Button
        onClick={addItemToCart}
        variant="contained"
        className={clsx(classes.button, classes.addToCart)}
      >
        <ShoppingCartIcon /> Add to cart
      </Button>
      <Button
        onClick={() => buyNow()}
        variant="contained"
        className={clsx(classes.button, classes.buyNow)}
      >
        {" "}
        <FlashOnIcon /> Buy Now
      </Button>
    </Box>
  );
}

export default ActionItems;

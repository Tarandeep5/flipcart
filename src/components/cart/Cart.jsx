import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Box } from "@mui/system";
import { ClassNames } from "@emotion/react";
import { makeStyles } from "@mui/styles";
import { Button, Grid, Typography } from "@mui/material";
import CartItem from "./CartItem";
import { removeFromCart } from "../../redux/actions/cartActions";
import EmptyCart from "./EmptyCart";
import TotalView from "./TotalView";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

const useStyle = makeStyles((theme) => ({
  component: {
    // marginTop: "55px !important",
    fontFamily: "Arial !important",
    padding: "30px 135px",
    display: "flex !important",
    [theme.breakpoints.down("sm")]: {
      padding: "15px 0",
    },
  },
  leftComponent: {
    // width: "67% !important",
    paddingRight: 15,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "15px 0",
    },
  },
  header: {
    padding: "15px 24px !important",
    background: "#fff",
  },
  placeOrder: {
    background: "#fb641b !important",
    borderRadius: 2,
    width: "250px !important",
    height: "50px !important",
    display: "flex !important",
    marginLeft: "auto !important",
  },
  bottom: {
    padding: "16px 22px !important",
    background: "#fff",
    borderTop: "1px solid #f0f0f0 !important",
    boxShadow: "0 -2px 10px 0 rgb(0 0 0 /10%) !important",
  },
}));

export default function Cart() {
  const classes = useStyle();
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(cartItems);
  });

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
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
    <>
      {cartItems.length ? (
        <Grid container className={classes.component}>
          <Grid
            item
            lg={5}
            md={5}
            sm={12}
            xs={12}
            classname={classes.leftComponent}
          >
            <Box className={classes.header}>
              <Typography
                style={{ fontFamily: "Arial", fontWeight: 600, fontSize: 18 }}
              >
                My Cart ({cartItems.length})
              </Typography>
            </Box>
            {cartItems.map((item) => (
              <CartItem item={item} removeItemFromCart={removeItemFromCart} />
            ))}
            <Box className={classes.bottom}>
              <Button
                onClick={() => buyNow()}
                className={classes.placeOrder}
                variant="contained"
              >
                Place Order
              </Button>
            </Box>
          </Grid>
          <Grid item lg={7} md={7} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Grid>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}

import { ClassNames } from "@emotion/react";
import { Button, Card, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import clsx from "clsx";
import GroupButton from "./GroupButton";

const useStyle = makeStyles({
  component: {
    display: "flex",
    borderRadius: 0,
    borderTop: "1px solid #f0f0f0 !important",
  },
  leftComponent: {
    margin: "20px !important",
  },
  rightComponent: {
    margin: "20px !important",
  },
  smallText: {
    fontSize: "14px !important",
  },
  greyTextColor: {
    color: "#878787",
  },
  price: {
    fontSize: 18,
    fontWeight: 600,
  },
  image: {
    height: 110,
    width: 110,
  },
  remove: {
    background: "#fff",
    color: "black",
    marginTop: 20,
    fontSize: 16,
  },
});

function CartItem({ item, removeItemFromCart }) {
  const classes = useStyle();
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  return (
    <Card className={classes.Component} style={{ display: "flex" }}>
      <Box className={classes.leftComponent}>
        <img src={item.url} className={classes.image} />
        <Box style={{ marginTop: 30 }}>
          <GroupButton />
        </Box>
      </Box>

      <Box className={classes.rightComponent}>
        <Typography style={{ fontFamily: "Arial" }}>
          {item.title.longTitle}
        </Typography>
        <Typography
          style={{ fontFamily: "Arial", marginTop: 10 }}
          className={clsx(classes.greyTextColor, classes.smallText)}
        >
          Seller:SuperComNet
          <span>
            <img src={fassured} style={{ width: 70, marginLeft: 10 }} />
          </span>
        </Typography>
        <Typography style={{ fontFamily: "Arial", margin: "20px 0" }}>
          <span className={classes.price}> ₹{item.price.cost}</span> &nbsp;
          &nbsp;
          <span className={classes.greyTextColor}>
            {" "}
            <strike> ₹{item.price.mrp}</strike>
          </span>{" "}
          &nbsp; &nbsp;
          <span style={{ color: "#388E3C" }}>{item.price.discount}off</span>
        </Typography>

        <Button
          onClick={() => removeItemFromCart(item.id)}
          style={{
            background: "#fff",
            color: "black",
            marginTop: 20,
            fontSize: 14,
          }}
          className={classes.remove}
        >
          {" "}
          REMOVE
        </Button>
      </Box>
    </Card>
  );
}

export default CartItem;

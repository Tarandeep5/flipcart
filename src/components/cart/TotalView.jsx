import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  component: {
    //width: "30% !important",
    marginLeft: "50px !important",
    marginTop: "20px !important",
  },
  header: {
    padding: "15px 24px !important",
  },
  container: {
    padding: "15px 24px !important",
  },
  greyTextColor: {
    color: "#878787",
  },
  price: {
    float: "right",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 600,
    borderTop: "1px dashed #e0e0e0",
    padding: "20px 0",
    borderBottom: "1px dashed #e0e0e0",
  },
});

function TotalView({ cartItems }) {
  const classes = useStyle();
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    totalAmount();
  }, [cartItems]);

  const totalAmount = () => {
    let price = 0,
      discount = 0;
    console.log(cartItems);
    cartItems.map((item) => {
      price += item.price.mrp;
      discount += item.price.mrp - item.price.cost;
    });
    setPrice(price);
    setDiscount(discount);
  };

  return (
    <Box className={classes.component}>
      <Box className={classes.header}>
        <Typography
          className={classes.greyTextColor}
          style={{ fontFamily: "Arial" }}
        >
          PRICE DETAILS
        </Typography>
      </Box>
      <Box className={classes.container}>
        <Typography style={{ fontFamily: "Arial", fontSize: 14 }}>
          Price ({cartItems.length} item){" "}
          <span className={classes.price}>₹{price}</span>
        </Typography>
        <Typography
          style={{ fontFamily: "Arial", marginTop: 15, fontSize: 14 }}
        >
          Discount <span className={classes.price}>-₹{discount}</span>
        </Typography>
        <Typography
          style={{ fontFamily: "Arial", marginTop: 15, fontSize: 14 }}
        >
          Delivery Charge <span className={classes.price}>₹40</span>
        </Typography>
        <Typography
          className={classes.totalAmount}
          style={{
            fontFamily: "Arial",
            marginTop: 15,
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          {" "}
          Total Amount{" "}
          <span className={classes.price}>₹{price - discount + 40}</span>
        </Typography>
        <Typography
          style={{
            fontFamily: "Arial",
            marginTop: 15,
            fontSize: 14,
            color: "green",
          }}
        >
          You will save ₹{discount - 40} on this order
        </Typography>
      </Box>
    </Box>
  );
}

export default TotalView;

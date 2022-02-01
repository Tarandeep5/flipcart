import { Box } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const useStyle = makeStyles({
  component: {
    margin: "80px 140px",
    width: "80% !important",
    background: "#fff !important",
    height: "65vh !important",
  },
  image: {
    width: "15%",
  },
  container: {
    textAlign: "center",
    paddingTop: 70,
  },
  button: {
    marginTop: "20px !important",
    padding: "12px 70px !important",
    borderRadius: "2px !important",
    fontSize: "14px !important",
  },
});

function EmptyCart() {
  const classes = useStyle();
  const navigate = useNavigate();

  const addItem = () => {
    navigate("/");
  };

  const emptycarturl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";
  return (
    <Box className={classes.component}>
      <Box className={classes.container}>
        <img src={emptycarturl} className={classes.image} />
        <Typography style={{ fontFamily: "Arial", marginTop: 10 }}>
          {" "}
          Your Cart is Empty !
        </Typography>
        <Typography
          style={{ fontFamily: "Arial", marginTop: 10, fontSize: 14 }}
        >
          {" "}
          Add items to it now.
        </Typography>
        <Button
          className={classes.button}
          onClick={() => addItem()}
          style={{ marginTop: 10 }}
          variant="contained"
        >
          Shop now
        </Button>
      </Box>
    </Box>
  );
}

export default EmptyCart;

import { ClassNames } from "@emotion/react";
import { Button, Dialog, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import Badge from "@mui/material/Badge";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import LoginDialog from "../login/Login";
import { useState, useContext } from "react";
import { LoginContext } from "../../context/ContextProvider";
import Profile from "./Profile";
import { useSelector } from "react-redux";

const useStyle = makeStyles((theme) => ({
  login: {
    background: "white",
    borderRadius: "5%",
    textTransform: "none",
    width: 100,
    height: 40,
    [theme.breakpoints.down("sm")]: {
      color: "#fff !important",
      background: "#2874f0 !important",
    },
  },
  wrapper: {
    marginLeft: 370,
    [theme.breakpoints.down("sm")]: {
      display: "block !important",
    },
    marginBottom: 5,
    display: "flex",
    "& > *": {
      marginRight: 50,
      textDecoration: "none",
      color: "#fff !important",
      [theme.breakpoints.down("sm")]: {
        color: "#2874f0 !important",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        marginTop: 5,
      },
    },
  },
  cartButton: {
    [theme.breakpoints.down("sm")]: {
      color: "#2874f0 !important",
    },
  },
}));

export default function HeaderButton() {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(LoginContext);

  const { cartItems } = useSelector((state) => state.cart);

  const openLoginDialog = () => {
    setOpen(true);
  };

  return (
    <div>
      <Box className={classes.wrapper}>
        {account ? (
          <Profile account={account} setAccount={setAccount} />
        ) : (
          <Link to="/">
            {" "}
            <Button
              style={{
                background: "white",
                color: "#2874f0",
                height: 33,
                width: 130,
                textTransform: "none",
                borderRadius: 2,
                fontSize: 17,
              }}
              className={classes.login}
              variant="contained"
              onClick={() => openLoginDialog()}
              disableElevation
            >
              {" "}
              Login
            </Button>
          </Link>
        )}
        <Link to="/">
          {" "}
          <Typography
            style={{
              paddingLeft: 50,
              paddingRight: 0,
              fontWeight: "bold",
              paddingTop: 5,
            }}
          >
            {" "}
            More
          </Typography>
        </Link>
        <Box />
        <Box>
          <Link to="/cart" style={{ display: "flex" }}>
            <Badge
              overlap="rectangular"
              badgeContent={cartItems.length}
              color="error"
            >
              <ShoppingCartIcon
                className={classes.cartButton}
                style={{ paddingLeft: 0, paddingTop: 5, color: "#fff" }}
              />
            </Badge>

            <Typography
              className={classes.cartButton}
              style={{
                paddingLeft: 10,
                fontWeight: "bold",
                color: "#fff",
                paddingTop: 5,
                textDecoration: "none",
              }}
            >
              {" "}
              Cart{" "}
            </Typography>
          </Link>
        </Box>
        <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
      </Box>
    </div>
  );
}

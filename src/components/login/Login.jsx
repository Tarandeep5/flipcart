import {
  Button,
  Dialog,
  DialogContent,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";

import { authenticateSignup } from "../../service/api";
import { authenticateLogin } from "../../service/api";

const useStyle = makeStyles({
  component: {
    height: "70vh",
    width: "90vh",
    padding: "0 !important",
  },
  image: {
    backgroundImage: `url(${"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"})`,
    height: "70vh",
    backgroundRepeat: "no-repeat",
    background: "#2874f0",
    width: "40%",
    backgroundPosition: "center 85%",
    padding: "45px 35px",
    "& > *": {
      color: "#FFFFFF",
      fontWeight: 600,
      fontFamily: "unset",
    },
  },
  login: {
    padding: "45px 35px",
    display: "flex",
    flex: "1",
    flexDirection: "column",
    "& > *": {
      marginTop: 30,
      paddingTop: 20,
      fontFamily: "unset",
      fontWeight: "bold !important",
    },
  },
  text: {
    color: "#878787 !important",
    fontSize: "12px !important",
    textAlign: "center",
    paddingTop: "20px !important",
    paddingBottom: "20px !important",
    fontFamily: "unset !important",
    fontWeight: "bold !important",
  },
  loginBtn: {
    textTransform: "none !important",
    background: "#FB641B !important",
    height: 48,
    marginTop: "10px !important",
    borderRadius: 2,
  },
  requestBtn: {
    textTransform: "none !important",
    background: "#FFFFFF !important",
    color: "#2874f0 !important",
    height: 48,
    borderRadius: 2,
    boxShadow: "0 2px 4px 0 rgb(0 0 0 /20%)",
  },
  createText: {
    fontFamily: "unset !important",
    fontWeight: "bold !important",
    textAlign: "center",
    marginTop: "auto",
    fontSize: "14px !important",
    color: "#2874f0",
    cursor: "pointer",
  },
  error: {
    fontsize: 8,
    color: "#ff6161",
    marginTop: 0,
    fontWeight: 600,
    lineHeight: 0,
  },
});

const initialValue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};

export default function Login({ open, setOpen, setAccount }) {
  const classes = useStyle();

  const [account, toggleAccount] = useState(initialValue.login);

  const [signup, setSignup] = useState(signupInitialValues);

  const [login, setLogin] = useState(loginInitialValues);

  const [error, setError] = useState(false);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(initialValue.login);
  };

  const toggleUserAccount = () => {
    toggleAccount(initialValue.signup);
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) {
      setError(true);
      return;
    }
    handleClose();
    setAccount(signup.username);
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (!response) {
      setError(true);
      return;
    }
    handleClose();
    setAccount(login.username);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent className={classes.component}>
        <Box style={{ padding: 0, display: "flex" }}>
          <Box className={classes.image}>
            <Typography
              variant="h5"
              style={{ fontWeight: 600, fontFamily: "unset" }}
            >
              {account.heading}
            </Typography>
            <Typography
              style={{ marginTop: 20, fontWeight: 600, fontFamily: "unset" }}
            >
              {" "}
              {account.subHeading}
            </Typography>
          </Box>

          {account.view === "login" ? (
            <Box className={classes.login}>
              <TextField
                onChange={(e) => onValueChange(e)}
                name="username"
                inputProps={{ style: { fontFamily: "Arial" } }}
                InputLabelProps={{ style: { fontFamily: "Arial" } }}
                label="Enter Username"
                variant="standard"
              />
              <TextField
                onChange={(e) => onValueChange(e)}
                type="password"
                name="password"
                label="Enter Password"
                inputProps={{ style: { fontFamily: "Arial" } }}
                InputLabelProps={{ style: { fontFamily: "Arial" } }}
                variant="standard"
              />
              {error && (
                <Typography
                  style={{
                    fontsize: 5,
                    color: "#ff6161",
                    marginTop: 0,
                    fontWeight: 600,
                    lineHeight: 0,
                  }}
                  className={classes.error}
                >
                  {" "}
                  Invalid username or password{" "}
                </Typography>
              )}

              <Typography className={classes.text}>
                By continuing , you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Typography>
              <Button
                onClick={loginUser}
                variant="contained"
                className={classes.loginBtn}
              >
                Login
              </Button>

              <Typography
                onClick={() => toggleUserAccount()}
                className={classes.createText}
              >
                {" "}
                New to FlipKart? Create an account
              </Typography>
            </Box>
          ) : (
            <Box className={classes.login}>
              <TextField
                onChange={(e) => onInputChange(e)}
                name="firstname"
                inputProps={{ style: { fontFamily: "Arial" } }}
                InputLabelProps={{ style: { fontFamily: "Arial" } }}
                label="Enter FirstName"
                variant="standard"
              />
              <TextField
                onChange={(e) => onInputChange(e)}
                style={{ fontFamily: "unset" }}
                name="lastname"
                inputProps={{ style: { fontFamily: "Arial" } }}
                InputLabelProps={{ style: { fontFamily: "Arial" } }}
                label="Enter LastName"
                variant="standard"
              />

              <TextField
                onChange={(e) => onInputChange(e)}
                name="username"
                inputProps={{ style: { fontFamily: "Arial" } }}
                InputLabelProps={{ style: { fontFamily: "Arial" } }}
                label="Enter UserName"
                variant="standard"
              />

              <TextField
                onChange={(e) => onInputChange(e)}
                name="email"
                inputProps={{ style: { fontFamily: "Arial" } }}
                InputLabelProps={{ style: { fontFamily: "Arial" } }}
                label="Enter Email"
                variant="standard"
              />

              <TextField
                onChange={(e) => onInputChange(e)}
                name="password"
                inputProps={{ style: { fontFamily: "Arial" } }}
                InputLabelProps={{ style: { fontFamily: "Arial" } }}
                label="Enter Password"
                variant="standard"
              />

              <TextField
                onChange={(e) => onInputChange(e)}
                name="phone"
                inputProps={{ style: { fontFamily: "Arial" } }}
                InputLabelProps={{ style: { fontFamily: "Arial" } }}
                label="Enter Phone Number"
                variant="standard"
              />

              {error && (
                <Typography
                  style={{
                    fontsize: 5,
                    color: "#ff6161",
                    marginTop: 0,
                    fontWeight: 600,
                    lineHeight: 0,
                  }}
                  className={classes.error}
                >
                  {" "}
                  username or email already exist{" "}
                </Typography>
              )}

              <Button
                variant="contained"
                onClick={() => signupUser()}
                className={classes.loginBtn}
              >
                Signup
              </Button>
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
}

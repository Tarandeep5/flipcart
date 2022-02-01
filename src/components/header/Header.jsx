import {
  AppBar,
  Drawer,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import HeaderButton from "./HeaderButton";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles((theme) => ({
  header: {
    height: 55,
  },
  logo: {
    width: 75,
  },
  subURL: {
    width: 10,
    marginLeft: 3,
    height: 10,
  },
  container: {
    display: "flex",
  },
  component: {
    marginLeft: "12%",
    lineHeight: 0,
    textDecoration: "none",
    color: "#fff",
  },
  subHeading: {
    fontStyle: "italic",
    fontSize: 10,
  },
  list: {
    width: 250,
  },
  menuButton: {
    display: "none !important",
    [theme.breakpoints.down("sm")]: {
      display: "block !important",
    },
  },
  headerbuttons: {
    [theme.breakpoints.down("sm")]: {
      display: "none !important",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const list = () => {
    return (
      <Box className={classes.list} onClick={handleClose}>
        <List>
          <ListItem>
            <HeaderButton className={classes.menuButton} />
          </ListItem>
        </List>
      </Box>
    );
  };

  return (
    <div>
      <AppBar style={{ background: "#2874f0" }} className={classes.header}>
        <Toolbar>
          <IconButton
            color="inherit"
            className={classes.menuButton}
            onClick={handleOpen}
          >
            <MenuIcon />
          </IconButton>
          <Drawer open={open} onClose={handleClose}>
            {list()}
          </Drawer>
          <Link to="/" className={classes.component}>
            <img src={logoURL} className={classes.logo} />
            <Box className={classes.container}>
              <Typography
                style={{ fontSize: 11 }}
                className={classes.subHeading}
              >
                Explore
                <Box component="span" style={{ color: "#ffe500" }}>
                  {" "}
                  Plus
                </Box>
              </Typography>
              <img src={subURL} className={classes.subURL} />
            </Box>
          </Link>
          <SearchBar />
          <span classname={classes.headerbuttons}>
            {" "}
            <HeaderButton />{" "}
          </span>
        </Toolbar>
      </AppBar>
    </div>
  );
}

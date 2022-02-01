import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { navData } from "../../constants/data";

const useStyle = makeStyles((theme) => ({
  component: {
    display: "flex",
    margin: "55px 40px 0px 40px",
    justifyContent: "space-between",
    overflowX: "overlay",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  container: {
    textAlign: "center",
    padding: "12px 8px",
  },
  image: {
    width: 64,
  },
}));

export default function Navbar() {
  const classes = useStyle();
  return (
    <div>
      <Box className={classes.component}>
        {navData.map((data) => (
          <Box className={classes.container}>
            <img src={data.url} className={classes.image} />
            <Typography
              style={{ fontFamily: "unset", fontSize: 14, fontWeight: 600 }}
            >
              {" "}
              {data.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </div>
  );
}

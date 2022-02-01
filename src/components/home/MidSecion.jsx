import { ClassNames } from "@emotion/react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { imageURL } from "../../constants/data";

const useStyle = makeStyles({
  wrapper: {
    display: "flex !important",
    marginTop: 20,
    justifyContent: "space-between",
  },
});

export default function MidSecion() {
  const classes = useStyle();
  return (
    <Grid lg={12} sm={12} md={12} xs={12} container className={classes.wrapper}>
      {imageURL.map((image) => (
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <img src={image} style={{ width: "100%" }} />
        </Grid>
      ))}
    </Grid>
  );
}

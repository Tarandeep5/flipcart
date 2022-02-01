import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/actions/productActions";
import { useParams } from "react-router-dom";
import { Box, fontWeight } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { TemplateProvider } from "../../templates/TemplateProvider";
import ActionItems from "./ActionItems";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const useStyle = makeStyles((theme) => ({
  component: {
    marginTop: 55,
    background: "F2F2F2",
  },
  container: {
    // margin: "0 80px",
    background: "#ffff",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  rightContainer: {
    marginTop: 50,
    "& > *": {},
  },
  smallText: {
    fontSize: 14,
  },
  badge: {
    fontSize: 14,
    marginRight: 10,
    color: "#00CC00",
  },
  MuiTableCell: {
    root: {
      borderBottom: "none !important",
    },
  },
}));

const DetailView = ({}) => {
  const classes = useStyle();

  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const sellerURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

  const { product } = useSelector((state) => state.getProductDetails);

  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  const dispatch = useDispatch();

  let { id } = useParams();
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch]);

  return (
    <Box className={classes.component}>
      {product && Object.keys(product).length && (
        <Grid container className={classes.container}>
          <Grid item lg={4} md={4} sm={8} xs={12} style={{ minWidth: "40%" }}>
            <ActionItems product={product} />
          </Grid>

          <Grid
            item
            lg={4}
            md={6}
            sm={8}
            xs={12}
            className={classes.rightContainer}
          >
            <Typography style={{ fontFamily: "Arial" }}>
              {product.title.longTitle}
            </Typography>
            <Typography
              className={classes.smallText}
              style={{
                fontFamily: "Arial",
                marginTop: 10,
                fontSize: 14,
                color: "grey",
              }}
            >
              8 Ratings & 1 Review
              <span>
                <img src={fassured} style={{ width: 77, marginLeft: 20 }} />
              </span>
            </Typography>
            <Typography style={{ marginTop: 10 }}>
              <span
                style={{ fontFamily: "Arial", fontWeight: 600, fontSize: 24 }}
              >
                {" "}
                ₹{product.price.cost}
              </span>{" "}
              &nbsp; &nbsp; &nbsp;
              <span
                style={{ fontFamily: "Arial", color: "grey", fontSize: 14 }}
              >
                <strike> ₹{product.price.mrp}</strike>{" "}
              </span>{" "}
              &nbsp;&nbsp;&nbsp;
              <span style={{ fontFamily: "Arial", color: "#388E3C" }}>
                {" "}
                {product.price.discount} off
              </span>{" "}
              &nbsp;&nbsp;&nbsp;
            </Typography>
            <Typography style={{ fontFamily: "Arial", marginTop: 10 }}>
              {" "}
              <b> Availalble Offers </b>
            </Typography>
            <Box>
              <Typography
                style={{ fontFamily: "Arial", fontSize: 14, marginTop: 10 }}
              >
                {" "}
                <LocalOfferIcon
                  classname={classes.badge}
                  style={{ fontSize: 14, marginRight: 10, color: "#00CC00" }}
                />{" "}
                <b> Special Price</b> Get extra 10% off (price inclusive of
                discount)T&C
              </Typography>

              <Typography
                style={{ fontFamily: "Arial", fontSize: 14, marginTop: 10 }}
              >
                {" "}
                <LocalOfferIcon
                  classname={classes.badge}
                  style={{ fontSize: 14, marginRight: 10, color: "#00CC00" }}
                />{" "}
                <b> Bank Offer 5%</b> Unlimited Cashback on Flipkart Axis Bank
                Credit CardT&C
              </Typography>

              <Typography
                style={{ fontFamily: "Arial", fontSize: 14, marginTop: 10 }}
              >
                {" "}
                <LocalOfferIcon
                  classname={classes.badge}
                  style={{ fontSize: 14, marginRight: 10, color: "#00CC00" }}
                />{" "}
                <b> Bank Offer20% </b> off on 1st txn with Amex Network Cards
                issued by ICICI Bank,IndusInd Bank,SBI Cards and MobikwikT&C
              </Typography>

              <Typography
                style={{ fontFamily: "Arial", fontSize: 14, marginTop: 10 }}
              >
                {" "}
                <LocalOfferIcon
                  classname={classes.badge}
                  style={{ fontSize: 14, marginRight: 10, color: "#00CC00" }}
                />{" "}
                <b> Bank Offer15%</b> Instant discount on first Pay Later order
                of ₹500 and aboveT&C
              </Typography>
            </Box>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell style={{ fontFamily: "Arial", color: "grey" }}>
                    Delivery
                  </TableCell>
                  <TableCell style={{ fontFamily: "Arial", fontWeight: 600 }}>
                    {date.toDateString()} | <b>₹40</b>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell style={{ fontFamily: "Arial", color: "grey" }}>
                    Warranty
                  </TableCell>
                  <TableCell style={{ fontFamily: "Arial", fontWeight: 600 }}>
                    No Warranty
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell
                    style={{
                      fontFamily: "Arial",
                      color: "grey",
                      verticalAlign: "baseline",
                    }}
                  >
                    Seller
                  </TableCell>
                  <TableCell style={{ fontFamily: "Arial" }}>
                    <span style={{ color: "#2874f0" }}> SuperComNet </span>
                    <Typography style={{ fontFamily: "Arial", fontSize: 14 }}>
                      {" "}
                      GST invoice Available
                    </Typography>
                    <Typography style={{ fontFamily: "Arial", fontSize: 14 }}>
                      {" "}
                      14 Days Return Policy
                    </Typography>
                    <Typography style={{ fontFamily: "Arial", fontSize: 14 }}>
                      View more sellers starting from ₹300{" "}
                    </Typography>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell colSpan={2}>
                    <img src={sellerURL} style={{ width: 390 }} />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell style={{ fontFamily: "Arial", color: "grey" }}>
                    Description
                  </TableCell>
                  <TableCell style={{ fontFamily: "Arial" }}>
                    {product.description}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default DetailView;

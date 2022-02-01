import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../../redux/actions/productActions";
import { StylesContext } from "@mui/styles";
import { List, ListItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  list: {
    marginTop: "40px !important",
    position: "absolute !important",
    color: "#000",
    fontFamily: "Arial !important",
    background: "#FFFFFF !important",
  },
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "#ffff",
  marginLeft: 10,
  width: "230%",
  [theme.breakpoints.down("sm")]: {
    width: "330%",
  },
  [theme.breakpoints.down("md")]: {
    width: "630%",
  },
  display: "flex",
  borderRadius: 2,

  height: 35,
  marginBottom: 7,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  paddingRight: 5,
  paddingTop: 0,
  height: "100%",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#2874f0",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "300%",
  fontSize: 15,
  fontWeight: 500,
  paddingLeft: 20,

  // vertical padding + font size from searchIcon
}));

export default function SearchBar() {
  const classes = useStyle();
  const [text, setText] = useState();
  const [open, setOpen] = useState(true);

  const getText = (text) => {
    setText(text);
    setOpen(false);
  };

  const { products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Search>
          <StyledInputBase
            placeholder="Search for products,brands and more"
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => getText(e.target.value)}
          />
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          {text && (
            <List className={classes.list} hidden={open}>
              {products
                .filter((product) =>
                  product.title.longTitle
                    .toLowerCase()
                    .includes(text.toLowerCase())
                )
                .map((product) => (
                  <ListItem>
                    <Link
                      to={`/product/${product.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                      onClick={() => setOpen(true)}
                    >
                      {product.title.longTitle}
                    </Link>
                  </ListItem>
                ))}
            </List>
          )}
        </Search>
      </Box>
    </div>
  );
}

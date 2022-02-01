import { Typography } from "@mui/material";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@mui/styles";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  component: {
    marginTop: 10,
  },
  logout: {
    marginLeft: "20px !important",
    fontSize: 14,
  },
});

export default function Profile({ account, setAccount }) {
  const [open, setOpen] = useState(false);
  const classes = useStyle();
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const logout = () => {
    setAccount("");
  };

  return (
    <>
      <Link to="/">
        {" "}
        <Typography onClick={handleClick} style={{ marginTop: 4 }}>
          {" "}
          {account}
        </Typography>
        <Menu
          className={classes.component}
          anchorEl={open}
          open={Boolean(open)}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={(handleClose, logout)}>
            {" "}
            <PowerSettingsNewIcon fontSize="small" color="primary" />
            <Typography
              style={{ marginLeft: 10, fontSize: 15, fontWeight: 600 }}
              classname={classes.logout}
            >
              {" "}
              Logout
            </Typography>
          </MenuItem>
        </Menu>
      </Link>
    </>
  );
}

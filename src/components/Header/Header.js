import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { ReactComponent as Logo } from "../../assets/icons/logo-no-background.svg";
import HouseIcon from "@mui/icons-material/House";
import GroupsIcon from "@mui/icons-material/Groups";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import CurrencyPoundOutlinedIcon from "@mui/icons-material/CurrencyPoundOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import classes from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import LanguageDropdown from "../Languages/LanguagesDropdown";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { logUserOut } from "../../redux/slices/loginSlice";
import { resetData } from "../../redux/slices/profileSlice";

const drawerWidth = 240;
const icons = [
  HouseIcon,
  LightbulbOutlinedIcon,
  CurrencyPoundOutlinedIcon,
  GroupsIcon,
  LoginOutlinedIcon,
  LogoutOutlinedIcon,
];

function Header(props) {
  const { validUser } = useSelector((state) => state.loginReducer);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logUserOut());
    dispatch(resetData());
  };

  const navItems = validUser
    ? [
        t("home"),
        t("how-it-works"),
        t("contact"),
        t("about-us"),
        t("profile"),
        t("logout"),
      ]
    : [
        t("home"),
        t("how-it-works"),
        t("contact"),
        t("about-us"),
        t("login"),
        t("signup"),
      ];
  const pages = validUser
    ? ["/", "/how-it-works", "/contact", "/about-us", "/profile", "/"]
    : ["/", "/how-it-works", "/contact", "/about-us", "/login", "/signup"];
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  //opens in mobile mode
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <IconButton>
        <Link to="/">
          <div className={classes.logoContainer}>
            <Logo className={classes.logo} />
          </div>
        </Link>
      </IconButton>
      <Divider />
      <List>
        {navItems.map((item, index) => {
          const Icon = icons[index]; // Get the icon for the current navItem
          return (
            <Link
              to={pages[index]}
              key={item}
              style={{ textDecoration: "none", color: "rgb(122, 38, 193)" }}
            >
              <ListItem key={item} disablePadding>
                <ListItemButton
                  sx={{ textAlign: "center" }}
                  onClick={
                    item.toLowerCase() === "logout" ||
                    item.toLowerCase() === "تسجيل الخروج"
                      ? logoutHandler
                      : undefined
                  }
                >
                  <Icon className={classes["nav-icon"]} />
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
      }}
      className={classes.box}
    >
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#F8F9FB" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton>
            <div className={classes.logoContainer}>
              <Link to="/">
                <Logo className={classes.logo} />
              </Link>
            </div>
          </IconButton>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => (
              <Link to={pages[index]} key={item}>
                <Button
                  onClick={
                    item.toLowerCase() === "logout" ||
                    item.toLowerCase() === "تسجيل الخروج"
                      ? logoutHandler
                      : undefined
                  }
                  sx={{
                    color:
                      item.toLowerCase() === "login" ||
                      item.toLowerCase() === "signup" ||
                      item.toLowerCase() === "تسجيل الدخول" ||
                      item.toLowerCase() === "إنشاء حساب"
                        ? "rgb(122, 38, 193)"
                        : "#999",
                    border:
                      item.toLowerCase() === "signup" ||
                      item.toLowerCase() === "إنشاء حساب"
                        ? "1.5px solid rgb(122, 38, 193)"
                        : "none",
                    borderRadius:
                      item.toLowerCase() === "signup" ? "50px" : "none",
                    fontSize: "1rem",
                    textTransform: "capitalize",
                    padding:
                      item === "signup".toLowerCase() ? "0.3rem 1.2rem" : "",
                  }}
                >
                  {item}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" className={classes.main}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Header;

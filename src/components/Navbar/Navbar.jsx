import { useContext } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PollContext } from "../../context/poll-context";
const Navbar = ({ value, handleChange }) => {
  const navigate = useNavigate();
  const { setFavoriteDishes } = useContext(PollContext);
  const logoutHandler = () => {
    setFavoriteDishes([]);
    navigate("/");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Dishes
          </Typography>
          <Button color="inherit" onClick={logoutHandler}>
            Logout
          </Button>
        </Toolbar>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            indicatorColor="inherit"
            textColor="inherit"
            variant="fullWidth"
            centered
          >
            <Tab label="All Dishes" />
            <Tab label="Favorite Dishes" />
          </Tabs>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Navbar;

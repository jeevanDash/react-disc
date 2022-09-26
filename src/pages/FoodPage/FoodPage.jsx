import { useContext, useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { PollContext } from "../../context/poll-context";
import AllDishes from "../../components/AllDishes/AllDishes";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./FoodPage.module.css";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const FoodPage = () => {
  const { foodData, favoriteDishes } = useContext(PollContext);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={styles.foodPage}>
      <Navbar value={value} handleChange={handleChange} />
      <Box sx={{ width: "100%" }}>
        <TabPanel value={value} index={0}>
          <AllDishes foodData={foodData} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AllDishes foodData={favoriteDishes} buttonFor="tab2" />
        </TabPanel>
      </Box>
    </div>
  );
};

export default FoodPage;

import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import DishCard from "../UI/DishCard";
import styles from "./AllDishes.module.css";
const EmptyPage = () => {
  return (
    <div className={styles.emptyPageContainer}>
      <p>Allot ranks to your favorite dishes</p>
    </div>
  );
};

const AllDishes = ({ foodData, buttonFor = "tab1" }) => {
  return (
    <Grid container>
      {foodData &&
        foodData.map((dish) => (
          <DishCard dish={dish} key={dish.id} buttonFor={buttonFor} />
        ))}
      {foodData.length === 0 && buttonFor === "tab2" && <EmptyPage />}
    </Grid>
  );
};

AllDishes.propTypes = {
  foodData: PropTypes.arrayOf(PropTypes.object).isRequired,
  buttonFor: PropTypes.string.isRequired,
};

export default AllDishes;

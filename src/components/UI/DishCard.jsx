import { useContext } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Grid,
  ButtonGroup,
  Button,
} from "@mui/material";
import { PollContext } from "../../context/poll-context";
import styles from "./DishCard.module.css";
const DishCard = ({ dish, id, buttonFor = "tab1" }) => {
  const { addFavoriteDishes, favoriteDishes } = useContext(PollContext);
  const rankHandler = (event) => {
    if (favoriteDishes.length === 3 && buttonFor === "tab1") {
      alert("Only 3 meals can be ranked");
      return;
    }
    addFavoriteDishes(dish, event.target.value);
  };

  return (
    <Grid item md={4} sm={6} xs={12} key={id} className={styles.cardSection}>
      <Card className={styles.card} sx={{ minHeight: 300 }}>
        <CardHeader title={dish.dishName} />
        <CardMedia component="img" height="194" image={dish.image} alt="dish" />
        <CardContent className={styles.cardContent}>
          <Typography variant="body2" color="text.secondary">
            {dish.description}
          </Typography>
        </CardContent>
        <CardActions>
          {!favoriteDishes.find((item) => item.id === dish.id) ||
          buttonFor === "tab2" ? (
            <ButtonGroup
              variant="outlined"
              aria-label="outlined button group"
              fullWidth
            >
              <Button
                onClick={rankHandler}
                value="30"
                variant={dish.score === "30" ? "contained" : "outlined"}
                color={dish.score === "30" ? "secondary" : "primary"}
                disabled={
                  buttonFor === "tab1" && favoriteDishes.length === 3
                    ? true
                    : false
                }
              >
                Rank 1
              </Button>
              <Button
                onClick={rankHandler}
                value="20"
                variant={dish.score === "20" ? "contained" : "outlined"}
                color={dish.score === "20" ? "secondary" : "primary"}
                disabled={
                  buttonFor === "tab1" && favoriteDishes.length === 3
                    ? true
                    : false
                }
              >
                Rank 2
              </Button>
              <Button
                onClick={rankHandler}
                value="10"
                variant={dish.score === "10" ? "contained" : "outlined"}
                color={dish.score === "10" ? "secondary" : "primary"}
                disabled={
                  buttonFor === "tab1" && favoriteDishes.length === 3
                    ? true
                    : false
                }
              >
                Rank 3
              </Button>
            </ButtonGroup>
          ) : (
            <Button disabled fullWidth>
              Already ranked!
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default DishCard;

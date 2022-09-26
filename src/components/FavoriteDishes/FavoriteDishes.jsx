import { useContext } from "react";
import { PollContext } from "../../context/poll-context";
import DishCard from "../UI/DishCard";
const FavoriteDishes = () => {
  const { favoriteDishes } = useContext(PollContext);
  <div>
    {favoriteDishes.length &&
      favoriteDishes.map((dish) => <DishCard dish={dish} key={dish.id} />)}
  </div>;
};

export default FavoriteDishes;

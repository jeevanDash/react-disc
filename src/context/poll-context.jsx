import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const PollContext = createContext({});

const PollContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [reqUserInfo, setReqUserInfo] = useState([]);
  const [foodData, setFoodData] = useState([]);
  const [isUserLogin, setIsUserLogin] = useState(true);
  const [favoriteDishes, setFavoriteDishes] = useState([]);
  useEffect(() => {
    const data = require("../data/users.json");
    setReqUserInfo(data);
  }, []);
  const verifyUserHandler = (inputUserName, inputUserPassword) => {
    for (const iterator of reqUserInfo) {
      if (
        inputUserName === iterator.username &&
        inputUserPassword === iterator.password
      ) {
        setIsUserLogin(true);
        navigate("/food");
        break;
      } else {
        setIsUserLogin(false);
        continue;
      }
    }
  };
  useEffect(() => {
    const foodList = require("../data/db.json");
    setFoodData(foodList);
  }, [isUserLogin]);

  const addFavoriteDishes = (dish, rank) => {
    const tempData = { ...dish, score: rank };
    const prevDishes = [...favoriteDishes];
    var foundDishIndex = prevDishes.findIndex((item) => item.id === dish.id);
    var sameRankDish = prevDishes.findIndex((dish) => dish.score === rank);
    console.log("fo", foundDishIndex);
    console.log("sa", sameRankDish);
    if (foundDishIndex !== -1 || sameRankDish !== -1) {
      if (sameRankDish !== -1) {
        prevDishes.splice(foundDishIndex, 1);
        prevDishes[sameRankDish] = {
          ...dish,
          score: rank,
        };

        console.log(prevDishes);
      } else {
        prevDishes[foundDishIndex] = {
          ...dish,
          score: rank,
        };
      }
      /*prevDishes[sameRankDish !== -1 ? sameRankDish : foundDishIndex] = {
        ...dish,
        score: rank,
      };*/
      prevDishes.sort((x, y) => y.score - x.score);
      setFavoriteDishes([...prevDishes]);
      return;
    } else {
      const newDishes = [...favoriteDishes, tempData];
      newDishes.sort((x, y) => y.score - x.score);
      setFavoriteDishes([...newDishes]);
    }
    console.log(prevDishes);
  };

  const value = {
    verifyUserHandler,
    reqUserInfo,
    isUserLogin,
    setIsUserLogin,
    foodData,
    addFavoriteDishes,
    favoriteDishes,
    setFavoriteDishes,
  };
  return <PollContext.Provider value={value}>{children}</PollContext.Provider>;
};

export default PollContextProvider;

import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-4c666-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json();
      console.log(responseData);

      const loadeMeals = [];

      for (const key in responseData) {
        loadeMeals.push({
          id: key,
          name: responseData[key].name,
          discription: responseData[key].discription,
          price: responseData[key].price,
        });
      }
      setMeals(loadeMeals);
    };
    fetchMeals();
  }, []);

  // const mealsList = meals.map((meal) => (
  //   <MealItem
  //     key={meal.id}
  //     id={meal.id}
  //     name={meal.name}
  //     description={meal.description}
  //     price={meal.price}
  //   />
  // ));

  return (
    <section className={classes.meals}>
      <Card>{/* <ul>{mealsList}</ul> */}</Card>
    </section>
  );
};

export default AvailableMeals;

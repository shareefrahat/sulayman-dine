import React from "react";
import useMeals from "../../utilities/useMeals";
import MealCard from "../MealCard/MealCard";

const Meals = () => {
  const [meals] = useMeals();
  return (
    <div>
      {!meals ? (
        <div>
          <p>Loading</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-10 my-40">
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal}></MealCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Meals;

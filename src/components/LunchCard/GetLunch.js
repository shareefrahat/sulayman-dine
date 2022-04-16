import React from "react";
import useMeals from "../../utilities/useMeals";
import LunchCard from "./LunchCard";

const GetLunch = () => {
  const [meals] = useMeals([]);

  const lunch = meals.filter((meal) => meal.category === "Lunch");

  return (
    <div>
      {!lunch ? (
        <div>Meals is loading</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-5">
          {lunch.map((meal) => (
            <LunchCard key={meal.id} meal={meal}></LunchCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetLunch;

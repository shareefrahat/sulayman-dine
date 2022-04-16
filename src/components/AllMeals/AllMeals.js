import React from "react";
import useMeals from "../../utilities/useMeals";
import AllMealsCard from "../AllMealsCard/AllMealsCard";

const AllMeals = () => {
  const [meals] = useMeals();

  return (
    <div>
      {!meals ? (
        <div>Meals is loading</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-5">
          {meals.map((meal) => (
            <AllMealsCard key={meal.id} meal={meal}></AllMealsCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllMeals;

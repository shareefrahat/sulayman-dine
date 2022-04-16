import React from "react";
import useMeals from "../../utilities/useMeals";
import BreakFastCard from "./BreakFastCard";

const GetBreakFast = () => {
  const [meals] = useMeals([]);

  const breakfast = meals.filter((meal) => meal.category === "Breakfast");

  return (
    <div>
      {!breakfast ? (
        <div>Meals is loading</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-5">
          {breakfast.map((meal) => (
            <BreakFastCard key={meal.id} meal={meal}></BreakFastCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetBreakFast;

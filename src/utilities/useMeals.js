import { useEffect, useState } from "react";

const useMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(
      "https://shareefrahat.github.io/custom-db-json/meals-items/items.JSON"
    )
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);
  return [meals, setMeals];
};

export default useMeals;

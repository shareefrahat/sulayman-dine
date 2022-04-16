import { ShoppingCartIcon } from "@heroicons/react/outline";
import React from "react";

const MealCard = ({ meal }) => {
  const { name, origin, img, price } = meal;
  return (
    <div>
      <div
        className="shadow-md bg-white mx-auto w-fit rounded-xl p-4 border-2
      transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300
      "
      >
        <div>
          <img className="w-[200px] md:w-[250px] mx-auto" src={img} alt="" />
        </div>
        <div className="flex flex-col gap-2 px-4 mt-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg md:text-xl font-semibold">{name}</h3>
            <h4 className="text-md text-gray-600">{origin}</h4>
          </div>

          <div className="flex flex-row justify-between items-center">
            <h4 className="text-md bg-orange-600 text-white px-2 py-1 rounded-md w-fit font-semibold">
              ${price}
            </h4>
            <div>
              <button
                // onClick={() => addToCart(product)}
                className="bg-gray-200 text-green-700 hover:bg-green-600 font-thin p-3 hover:text-white  aspect-square rounded-full"
              >
                <ShoppingCartIcon className="w-5"></ShoppingCartIcon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard;

import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import React from "react";

const FeatureCard = ({ feature }) => {
  const { name, img, text } = feature;
  return (
    <div>
      <div
        className="shadow-md bg-white mx-auto w-fit rounded-xl p-4 border-2
      transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300
      "
      >
        <div>
          <img
            className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] mx-auto"
            src={img}
            alt=""
          />
        </div>
        <div>
          <p className="text-lg md:text-xl font-semibold py-3">{name}</p>
        </div>
        <div>
          <p className="w-[200px] md:w-[300px] mx-auto text-justify text-lg">
            {text}
          </p>
        </div>
        <div>
          <p className="text-green-600 text-semibold text-lg">
            Learn more{" "}
            <ArrowCircleRightIcon className="w-5 inline-block"></ArrowCircleRightIcon>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;

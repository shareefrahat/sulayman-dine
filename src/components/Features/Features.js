import React from "react";
import FeatureCard from "./FeatureCard/FeatureCard";
import feature1 from "../../images/feature-1.png";
import feature2 from "../../images/feature-2.png";
import feature3 from "../../images/feature-3.png";

const Features = () => {
  const features = [
    {
      id: 1,
      name: "Best In Quality",
      img: feature1,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis corrupti repudiandae mollitia quas ipsum ad.",
      icon: "",
    },
    {
      id: 2,
      name: "Good Auto Responder",
      img: feature2,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis corrupti repudiandae mollitia quas ipsum ad.",
      icon: "",
    },
    {
      id: 3,
      name: "Fastest Delivery",
      img: feature3,
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis corrupti repudiandae mollitia quas ipsum ad.",
      icon: "",
    },
  ];
  return (
    <div className="my-10">
      <h4 className="text-2xl md:font-4xl font-serif font-semibold text-green-600 border-b-4 rounded border-b-orange-600 inline-block">
        Our Specialties
      </h4>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-10">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature}></FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

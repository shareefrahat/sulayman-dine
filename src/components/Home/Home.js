import React from "react";
import bgBanner from "../../images/bannerbackground.png";
import Features from "../Features/Features";

const Home = () => {
  return (
    <div>
      <section
        style={{
          backgroundImage: `url(${bgBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="bg-cover h-[150px] w-full md:h-[570px] flex justify-center items-center"
      >
        <div>
          <input
            className="outline-none border-2 rounded-full border-slate-400 focus:border-orange-600 px-4  py-1 text-md md:text-xl text-green-700 font-serif w-[225px] md:w-[500px] bg-transparent"
            type="text"
            placeholder="Search your meal here"
          />
          <span className="bg-green-600 hover:bg-orange-600 text-white px-4 py-2 mx-2 text-md md:text-xl rounded-full font-serif cursor-pointer">
            Search
          </span>
        </div>
      </section>
      <section>Meal components</section>
      <section>
        <Features></Features>
      </section>
    </div>
  );
};

export default Home;

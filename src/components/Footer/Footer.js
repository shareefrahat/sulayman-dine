import React from "react";
import logo from "../../images/logo.png";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="mt-20 bg-slate-900 text-slate-100">
      <section className=" flex flex-col md:flex-row-reverse justify-evenly items-center py-10">
        <div>
          <h5 className="text-md text-center md:text-left text-orange-500 font-bold">
            SERVICES
          </h5>
          <ul className="my-5 text-center md:text-left flex flex-col gap-4">
            <li>
              <a className="hover:underline" href="/">
                Food Delivery
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/">
                Event Management
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/">
                Occasional Order
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/">
                Whole Sale Service
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-md text-center md:text-left text-orange-500 font-bold">
            QUERIES
          </h5>
          <ul className="my-5 text-center md:text-left flex flex-col gap-4">
            <li>
              <a className="hover:underline" href="/">
                Get Help
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/">
                Buy Gift Cards
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/">
                Special Offers
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/">
                Buy me a coffee
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block border-r-2 h-28 border-r-slate-400"></div>
        <div className="mt-10 md:mt-0">
          <img className="w-32 md:w-40 mx-auto" src={logo} alt="" />
          <p className="text-sm md:text-md text-slate-400">
            Rain or shine, it’s time to dine!
          </p>
        </div>
      </section>
      <section className=" py-8 text-md border-t border-t-slate-400">
        <p>&copy; Copyright Reserved | Sulayman Dine {year}</p>
      </section>
    </footer>
  );
};

export default Footer;

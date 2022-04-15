import React from "react";
import logo from "../../images/logo.png";
import { ShoppingCartIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex flex-row justify-between items-center py-3 md:py-4 px-5 md:px-10 shadow-lg ">
        <div>
          <img className="w-32 md:w-36" src={logo} alt="" />
        </div>
        <div className="flex flex-row justify-center items-center ">
          <div>
            <button className="mx-5 md:mx-10 relative mt-2">
              <span className="bg-orange-600 text-white aspect-square rounded-full absolute bottom-4 left-4 px-1 font-bold">
                0
              </span>
              <ShoppingCartIcon className="w-8 text-slate-500 hover:text-orange-600 font-thin"></ShoppingCartIcon>
            </button>
          </div>
          <div>
            <button className="rounded-full bg-green-600 text-white font-s font-bold text-lg px-5 py-1 hover:bg-orange-600">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

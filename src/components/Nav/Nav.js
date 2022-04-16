import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const links = [
    { id: 1, name: "All", path: "/allmeals" },
    { id: 2, name: "Breakfast", path: "/breakfast" },
    { id: 3, name: "Lunch", path: "/lunch" },
    { id: 4, name: "Dinner", path: "/dinner" },
  ];
  return (
    <div>
      <div className="my-10 flex flex-row justify-evenly items-center">
        {links.map((link) => (
          <Link
            to={link.path}
            key={link.id}
            className="text-xl border-b-4 border-b-slate-300 rounded hover:border-b-orange-600 font-serif"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;

import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="flex  bg-gray-700 items-center py-3 px-8 gap-16">
        <img className="w-15" src="/src/assets/logo.png" alt="" />

        <div className=" text-2xl flex gap-7 ">
          <Menu to="/Home" title="Home" />
          <Menu to="/Products" title="Products" />
        </div>
      </div>
    </>
  );
};

const Menu = ({ to, title }) => {
  return (
    <NavLink
      className={(e) => {
        console.log(e);
      }}
      to={to}
    >
      {title}
    </NavLink>
  );
};

export default Nav;

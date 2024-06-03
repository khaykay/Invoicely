import React from "react";
import logo from "/logo.svg";
const Navbar = () => {
  return (
    <>
      <nav className="bg-slate-950 px-6 py-2 flex items-center ">
        <span className="inline-flex gap-2 items-center">
          <span className="p-1 rounded-lg bg-white inline-block">
            <img src={logo} alt="" className="h-7 w-7 " />
          </span>
          <span className=" text-xs font-bold text-slate-50">Invoicely</span>
        </span>
      </nav>
    </>
  );
};

export default Navbar;

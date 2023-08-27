import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Body from "./Body";
const Main = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Body />
      </div>
    </>
  );
};

export default Main;

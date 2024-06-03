import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Body from "./Body";

const Main = () => {
  return (
    <>
      <Navbar />
      <main className="">
        <Sidebar />
        <Body />
      </main>
    </>
  );
};

export default Main;

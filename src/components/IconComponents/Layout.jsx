import React from "react";
import gridcolumn from "/gridcolumn.svg";
import gridrow from "/gridrow.svg";
import page from "/page.svg";
import doubly from "/doubletop.svg";
import triply from "/tripletop.svg";
const Layout = () => {
  return (
    <div>
      <div className="">
        <h5 className="mb-3 text-xs  ">Suggested</h5>
        <div className="  flex flex-wrap gap-y-4  gap-x-4  justify-center">
          <span className="">
            <img src={page} alt="" className="h-[5.5rem] w-20 " />
          </span>
          <span className="">
            <img src={gridrow} alt="" className="h-[5.5rem] w-20 " />
          </span>
          <span className="">
            <img src={gridcolumn} alt="" className="h-[5.5rem] w-20  " />
          </span>
          <span className="">
            <img src={doubly} alt="" className="h-[5.5rem] w-20 " />
          </span>
          <span className="">
            <img src={triply} alt="" className="h-[5.5rem] w-20 " />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Layout;

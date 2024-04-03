import React from "react";
import gridcolumn from "/gridcolumn.svg";
import gridrow from "/gridrow.svg";
import page from "/page.svg";
import doubly from "/doubletop.svg";
import triply from "/tripletop.svg";
import { useDispatch } from "react-redux";
import { selectLayout } from "../../Redux/layoutSlice";

const Layout = () => {
  const dispatch = useDispatch();
  const setLayout = (layout) => {
    dispatch(selectLayout(layout));
  };
  return (
    <div>
      <div className="">
        <h5 className="mb-3 text-xs  ">Suggested</h5>
        <div className="  flex flex-wrap gap-y-4  gap-x-4  justify-center">
          <span className="" onClick={() => setLayout("default")}>
            <img src={page} alt="" className="h-[5rem] w-[4.5rem] " />
          </span>
          <span className="" onClick={() => setLayout("gridrow")}>
            <img src={gridrow} alt="" className="h-[5rem] w-[4.5rem]" />
          </span>
          <span className="" onClick={() => setLayout("gridcolumn")}>
            <img src={gridcolumn} alt="" className="h-[5rem] w-[4.5rem]  " />
          </span>
          <span className="" onClick={() => setLayout("default")}>
            <img src={doubly} alt="" className="h-[5rem] w-[4.5rem] " />
          </span>
          <span className="" onClick={() => setLayout("default")}>
            <img src={triply} alt="" className="h-[5rem] w-[4.5rem] " />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Layout;

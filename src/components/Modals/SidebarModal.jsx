import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const SidebarModal = ({ isOpen, onClose, selectedIcon, children }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div className="bg-white absolute h-full ml-[5rem] w-[13.5em] px-3 shadow-[21px_0_7px_-15px_rgba(97,97,97,0.1)]">
        <div className=" flex items-center justify-between  py-3 ">
          <div className="font-medium text-lg">{selectedIcon}</div>
          <div className=" flex items-center">
            <button className="" onClick={onClose}>
              <IoIosCloseCircleOutline className=" h-6 w-6 " />
            </button>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default SidebarModal;

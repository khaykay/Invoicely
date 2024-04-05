import React, { useState } from "react";
import SidebarModal from "./Modals/SidebarModal";
import Layout from "./IconComponents/Layout";
import Color from "./IconComponents/Color";

const Sidebar = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const openModal = (icon) => {
    setSelectedIcon(icon);
  };

  const closeModal = () => {
    setSelectedIcon(null);
  };
  return (
    <>
      <div className="inset-0 fixed mx-0 my-auto w-[80px] h-max ">
        <div className="   relative flex flex-col p-7 justify-around gap-5 h-max items-center bg-[#2764F6] rounded-r-[45px] ">
          <span
            className="flex flex-col items-center "
            onClick={() => closeModal()}
          >
            <svg
              className="w-6 "
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.186 2.09c.521.25 1.136.612 1.625 1.101.49.49.852 1.104 1.1 1.625.313.654.11 1.408-.401 1.92l-7.214 7.213c-.31.31-.688.541-1.105.675l-4.222 1.353a.75.75 0 0 1-.943-.944l1.353-4.221a2.75 2.75 0 0 1 .674-1.105l7.214-7.214c.512-.512 1.266-.714 1.92-.402zm.211 2.516a3.608 3.608 0 0 0-.828-.586l-6.994 6.994a1.002 1.002 0 0 0-.178.241L9.9 14.102l2.846-1.496c.09-.047.171-.107.242-.178l6.994-6.994a3.61 3.61 0 0 0-.586-.828zM4.999 5.5A.5.5 0 0 1 5.47 5l5.53.005a1 1 0 0 0 0-2L5.5 3A2.5 2.5 0 0 0 3 5.5v12.577c0 .76.082 1.185.319 1.627.224.419.558.754.977.978.442.236.866.318 1.627.318h12.154c.76 0 1.185-.082 1.627-.318.42-.224.754-.559.978-.978.236-.442.318-.866.318-1.627V13a1 1 0 1 0-2 0v5.077c0 .459-.021.571-.082.684a.364.364 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.57-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684V5.5z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
            <span className="text-xs ">Design</span>
          </span>
          <span
            className="flex flex-col items-center"
            onClick={() => openModal("Template")}
          >
            <svg
              className="w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="matrix(1, 0, 0, 1, 0, 0)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 3V9H21V3H3ZM19 5H5V7H19V5Z"
                  fill="#000000"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 11V21H11V11H3ZM9 13H5V19H9V13Z"
                  fill="#000000"
                ></path>{" "}
                <path d="M21 11H13V13H21V11Z" fill="#000000"></path>{" "}
                <path d="M13 15H21V17H13V15Z" fill="#000000"></path>{" "}
                <path d="M21 19H13V21H21V19Z" fill="#000000"></path>{" "}
              </g>
            </svg>
            <span className="text-xs ">Template</span>
          </span>
          <span
            className="flex flex-col items-center"
            onClick={() => openModal("Layout")}
          >
            <svg
              className="w-6 "
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 2H6V13H9V2ZM10 2V13H12.5C12.7761 13 13 12.7761 13 12.5V2.5C13 2.22386 12.7761 2 12.5 2H10ZM2.5 2H5V13H2.5C2.22386 13 2 12.7761 2 12.5V2.5C2 2.22386 2.22386 2 2.5 2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V12.5C1 13.3284 1.67157 14 2.5 14H12.5C13.3284 14 14 13.3284 14 12.5V2.5C14 1.67157 13.3284 1 12.5 1H2.5Z"
                  fill="#000000"
                ></path>{" "}
              </g>
            </svg>
            <span className="text-xs ">Layout</span>
          </span>
          <span
            className="flex flex-col items-center"
            onClick={() => openModal("Color")}
          >
            <svg
              className="w-6 "
              fill="#000000"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M12.022,23a11.053,11.053,0,0,0,10.921-9.5,5.853,5.853,0,0,0-.577-3.5c-1.655-3.146-4.777-2.671-7.056-2.322-1.18.178-2.4.366-2.865-.035A2.416,2.416,0,0,1,12.02,6c0-2.683,0-5-3-5C3.753,1,1,6.534,1,12A11.023,11.023,0,0,0,12.022,23ZM9.016,3c.909,0,1,0,1,3a3.941,3.941,0,0,0,1.122,3.168c1.163,1,2.844.741,4.469.494,2.483-.379,4.061-.482,4.986,1.276a3.844,3.844,0,0,1,.363,2.293A9.024,9.024,0,0,1,3,12C3,8.382,4.6,3,9.016,3ZM5,7.5A1.5,1.5,0,1,1,6.5,9,1.5,1.5,0,0,1,5,7.5ZM4,12a1.5,1.5,0,1,1,1.5,1.5A1.5,1.5,0,0,1,4,12Zm3.5,3A1.5,1.5,0,1,1,6,16.5,1.5,1.5,0,0,1,7.5,15Zm8,3A3.5,3.5,0,1,0,12,14.5,3.5,3.5,0,0,0,15.5,18Zm0-5A1.5,1.5,0,1,1,14,14.5,1.5,1.5,0,0,1,15.5,13Z"></path>
              </g>
            </svg>
            <span className="text-xs ">Color</span>
          </span>
          <span
            className="flex flex-col items-center"
            onClick={() => openModal("Background")}
          >
            <svg
              className="w-6 "
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <rect
                  width="48"
                  height="48"
                  fill="white"
                  fill-opacity="0.01"
                ></rect>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M37 37C39.2091 37 41 35.2091 41 33C41 31.5272 39.6667 29.5272 37 27C34.3333 29.5272 33 31.5272 33 33C33 35.2091 34.7909 37 37 37Z"
                  fill="#000000"
                ></path>{" "}
                <path
                  d="M20.8535 5.50439L24.389 9.03993"
                  stroke="#000000"
                  stroke-width="4"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M23.6818 8.33281L8.12549 23.8892L19.4392 35.2029L34.9955 19.6465L23.6818 8.33281Z"
                  stroke="#000000"
                  stroke-width="4"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M12 20.0732L28.961 25.6496"
                  stroke="#000000"
                  stroke-width="4"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M4 43H44"
                  stroke="#000000"
                  stroke-width="4"
                  stroke-linecap="round"
                ></path>{" "}
              </g>
            </svg>
            <span className="text-xs ">Background</span>
          </span>
        </div>
        <div className="h-[80px] w-[80px] bg-white absolute top-[-80.1px]  rounded-[50%] z-10"></div>
        <div className="h-[80px] w-[80px] bg-white z-10 absolute rounded-[50%] bottom-[-80.1px]"></div>
        <div className="h-10 w-10 bg-[#2764F6] absolute top-[-39px]  "></div>
        <div className="h-10 w-10 bg-[#2764F6] absolute bottom-[-39px]"></div>
      </div>

      <SidebarModal
        isOpen={selectedIcon !== null}
        onClose={closeModal}
        selectedIcon={selectedIcon}
      >
        {selectedIcon === "Template" && <p>Template Content Goes Here</p>}
        {selectedIcon === "Layout" && <Layout />}
        {selectedIcon === "Color" && <Color />}
        {selectedIcon === "Background" && <p>Background Content Goes Here</p>}
      </SidebarModal>
    </>
  );
};

export default Sidebar;

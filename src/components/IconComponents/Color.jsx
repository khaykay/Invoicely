import React, { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

const Color = () => {
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [isColorPickerVisible, setColorPickerVisible] = useState(false);
  const [recentlyUsedColors, setRecentlyUsedColors] = useState([selectedColor]);

  if (recentlyUsedColors.length == 8) {
    recentlyUsedColors.shift();
  }

  const handleColorChange = (event) => {
    const color = event.target.value;
    setSelectedColor(color);
    setColorPickerVisible(true);
    setRecentlyUsedColors((prevColors) => [...prevColors, color]);
  };
  // console.log(selectedColor + "it happened 2");
  console.log(recentlyUsedColors);
  return (
    <>
      <div className="relative bg-gradient-to-b from-red-500 via-yellow-500 to-green-500 h-12 w-12 rounded-full">
        <input
          type="color"
          id="colorPicker"
          value={selectedColor}
          onChange={handleColorChange}
          className={`rounded-full  focus:outline-none h-12 ${
            isColorPickerVisible ? "opacity-100" : "opacity-0"
          }`}
        />
        <IoAddCircleOutline className="absolute bg-white bottom-1 left-7 h-6 w-6 rounded-full" />
        <style>
          {`
            input[type="color"]::-webkit-color-swatch-wrapper {
              padding: 0;
              border: none;
            }

            input[type="color"]::-webkit-color-swatch {
              border-radius: 50%;
               border: none;
            }
          `}
        </style>
      </div>

      <div className="">
        <h5 className="mb-3 text-xs  ">Recently used color</h5>
        {/* <span className=""></span> */}
        <div className="">
          {recentlyUsedColors.map((color, index) => (
            <span className={`h-12 w-12 rounded-full bg-${color}`} key={index}>
              recently used {color}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Color;

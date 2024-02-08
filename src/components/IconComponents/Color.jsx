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
    // console.log(selectedColor);
  };

  const defaultWebColors = [
    "#000000", // Black
    "#C0C0C0", // Silver
    "#808080", // Gray
    "#FFFFFF", // White
    "#800000", // Maroon
    "#FF0000", // Red
    "#800080", // Purple
    "#FF00FF", // Fuchsia
    "#008000", // Green
    "#00FF00", // Lime
    "#808000", // Olive
    "#FFFF00", // Yellow
    "#000080", // Navy
    "#0000FF", // Blue
    "#008080", // Teal
    "#00FFFF", // Aqua
  ];

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

      <div className="mt-6">
        <h5 className="mb-3 text-xs  ">Recently used color</h5>

        <div className="flex gap-2 flex-wrap">
          {recentlyUsedColors?.map((color, index) => (
            <span
              className={`h-10 w-10 rounded-full inline-block`}
              key={index}
              style={{ background: `${color}` }}
            ></span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h5 className="mb-3 text-xs  ">Default Colors</h5>
        <div className="flex gap-2 flex-wrap justify-center">
          {defaultWebColors?.map((color, index) => (
            <span
              className={`h-10 w-[5.5rem] rounded inline-block border border-solid border-gray-200`}
              key={index}
              style={{ background: `${color}` }}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Color;

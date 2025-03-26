import React from "react";

const Button = ({ white, title }) => {
  return (
    <button
      className={`${
        white
          ? "border-2 border-[#111B47] text-[#111B47]"
          : "bg-[#00ADB5] text-white"
      } px-10 py-2 rounded-md font-medium text-xs`}
    >
      {title}
    </button>
  );
};

export default Button;


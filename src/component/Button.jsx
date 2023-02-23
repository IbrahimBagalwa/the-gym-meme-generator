import React from "react";

const Button = ({ showImages, title, styles }) => {
  return (
    <button
      onClick={showImages}
      className={`bg-[#A426D0] font-bold text-base text-white py-2 rounded-md w-full ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;

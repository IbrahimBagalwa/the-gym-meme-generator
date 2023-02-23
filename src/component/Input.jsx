import React from "react";

const Input = ({ meme, handleChange }) => {
  return (
    <div className="flex items-center justify-between pt-4">
      <input
        name="takeMoney"
        value={meme.takeMoney}
        onChange={handleChange}
        type="text"
        className="w-[230px] h-9 p-2 rounded-md border border-[#D5D4D8]"
        placeholder="Shut up"
      />
      <input
        name="shutup"
        value={meme.shutup}
        onChange={handleChange}
        type="text"
        className="w-[230px] h-9 p-2 rounded-md border border-[#D5D4D8]"
        placeholder="and take my money"
      />
    </div>
  );
};

export default Input;

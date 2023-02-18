import React, { useEffect, useRef, useState } from "react";
import download from "downloadjs";
import { toPng } from "html-to-image";
import Draggable from "react-draggable";
const URL = "https://api.imgflip.com/get_memes";
const Meme = () => {
  const [meme, setMeme] = useState({
    shutup: "",
    takeMoney: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMeme({ ...meme, [name]: value });
  };
  const imgRef = useRef();
  const showImages = () => {
    const randomImage = Math.floor(Math.random() * allMemes.length);
    const { url } = allMemes[randomImage];
    setMeme((prev) => {
      return {
        ...prev,
        randomImg: url,
      };
    });
  };

  const downloadImage = () => {
    toPng(imgRef.current).then(function (img) {
      download(img, "my-meme.png");
    });
  };
  const fetchMemes = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setAllMemes(data.data.memes);
  };
  useEffect(() => {
    fetchMemes();
  }, []);
  return (
    <div className="bg-white px-4 pb-14">
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
      <button
        onClick={showImages}
        className="bg-[#A426D0] font-bold text-base text-white py-2 rounded-md w-full mt-2 mb-6"
      >
        Get a new meme image 🖼
      </button>
      <div className="relative" ref={imgRef}>
        <Draggable bounds="parent">
          <span className="absolute text-center -translate-x-1/2 mt-[15px] uppercase top-0 text-white font-bold text-4xl">
            {meme.shutup}
          </span>
        </Draggable>
        <img
          src={meme.randomImg}
          alt="images"
          className="w-full h-[268px] rounded-md object-cover"
        />
        <Draggable bounds="parent">
          <span className="absolute text-center -translate-x-1/2 mt-[15px] uppercase bottom-0 text-white font-bold text-4xl">
            {meme.takeMoney}
          </span>
        </Draggable>
      </div>
      <button
        onClick={downloadImage}
        className="bg-[#A426D0] font-bold text-base text-white py-2 rounded-md w-full mt-6"
      >
        Download Image
      </button>
    </div>
  );
};

export default Meme;

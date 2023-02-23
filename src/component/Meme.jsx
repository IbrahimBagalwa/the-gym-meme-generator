import { useEffect, useRef, useState } from "react";
import download from "downloadjs";
import { toPng } from "html-to-image";
import DraggableComponent from "./DraggableComponent";
import Input from "./Input";
import Button from "./Button";

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
    <div className="px-4 bg-white pb-14">
      <Input handleChange={handleChange} meme={meme} />
      <Button
        showImages={showImages}
        title="Get a new meme image 🖼"
        styles="mt-2 mb-6"
      />
      <DraggableComponent meme={meme} imgRef={imgRef} />
      <Button
        showImages={downloadImage}
        title="Get a new meme image 🖼"
        styles="mt-6"
      />
    </div>
  );
};

export default Meme;

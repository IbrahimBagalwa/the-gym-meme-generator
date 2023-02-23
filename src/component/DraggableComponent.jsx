import Draggable from "react-draggable";
const DraggableComponent = ({ meme, imgRef }) => {
  return (
    <div className="relative" ref={imgRef}>
      <Draggable bounds="parent">
        <span className="absolute text-center -translate-x-1/2 mt-[15px] uppercase top-0 text-white font-bold text-4xl">
          {meme.shutup}
        </span>
      </Draggable>
      <img
        src={meme.randomImg}
        alt="random"
        className="w-full h-[268px] rounded-md object-cover"
      />
      <Draggable bounds="parent">
        <span className="absolute text-center -translate-x-1/2 mt-[15px] uppercase bottom-0 text-white font-bold text-4xl">
          {meme.takeMoney}
        </span>
      </Draggable>
    </div>
  );
};

export default DraggableComponent;

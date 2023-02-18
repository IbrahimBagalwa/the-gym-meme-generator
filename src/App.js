import Header from "./component/Header";
import Meme from "./component/Meme";

function App() {
  return (
    <div className="mx-auto flex justify-center flex-col items-center bg-slate-400 h-screen w-full">
      <div>
        <Header />
        <Meme />
      </div>
    </div>
  );
}

export default App;

import { use, useState } from "react";
import "./App.css";
import Button from "./Component/Button";
import ColorBox from "./Component/ColorBox";

function App() {
  const Colors = ["red", "blue", "gray", "green"];
  const [selectedColor, setselectedColor] = useState("red");
  return (
    <>
      <h1 className="justify-self-center-safe">Color Switcher</h1>

      <div className="flex gap-1 justify-center">
        {Colors.map((item) => {
          return (
            <Button key={item} color={item} setselectedColor={setselectedColor}>
              {item}
            </Button>
          );
        })}
      </div>
      <ColorBox color={selectedColor} />
    </>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import { ButtonClick } from "./components/ButtonClick";
import { ButtonBG } from "./components/ButtonBG";
import { getRandomColor } from "./utils/randomColor";

function App() {
  const [color, setColor] = useState<string>();
  const handleClick = () => {
    setColor(getRandomColor());
  };
  return (
    <ButtonBG>
      <ButtonClick
        bgcolor={color}
        onClick={() => {
          handleClick();
        }}
      >
        Click Me
      </ButtonClick>
    </ButtonBG>
  );
}

export default App;

import { useState } from "react";
import { ButtonBG } from "./components/ButtonBG";
import { ButtonClick } from "./components/ButtonClick";
import { getRandomColor } from "./utils/randomColor";

function ButtonColor() {
    const [color, setColor] = useState<string>();
    const handleClick = () => {
      setColor(getRandomColor());
    };
    return (
      <>
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
        ;
      </>
    );
}
export default ButtonColor;
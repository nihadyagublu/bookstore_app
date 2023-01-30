import { useState } from "react";
import { CSSTransition } from "react-transition-group";

import ToggleElements from "./ToggleElements";

export default function Toggle() {
  const [toggle, setToggle] = useState(null);

  function lightModeHandler() {
    setToggle(true);
    document.body.style = "background-color: rgb(162, 238, 176);";
  }

  function darkModeHandler() {
    setToggle(false);
    document.body.style = "background-color: rgb(4, 19, 6);";
  }

  return (
    <>
      <span
        style={{ fontSize: "1.1rem" }}
        className={toggle ? "LightWritten lightChosen" : "LightWritten"}
        onClick={lightModeHandler}
      >
        Light mode
      </span>
      <span
        style={{ fontSize: "1.1rem" }}
        className={!toggle ? "DarkWritten darkChosen" : "DarkWritten"}
        onClick={darkModeHandler}
      >
        Dark mode
      </span>

      <ToggleElements show={toggle} />
    </>
  );
}

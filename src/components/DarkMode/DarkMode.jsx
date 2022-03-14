import React from "react";
import { useDispatch } from "react-redux";
import { setDarkSideAC, setLightSideAC } from "../../redux/app-reducer";
import "./DarkMode.css";

function DarkMode(props) {
  let dispatch = useDispatch();

  function darkModeSwitcher() {
    const darkModeStyle = document.querySelector(".dark_mode--style");
    if (darkModeStyle.className === "dark_mode--style dark") {
      dispatch(setLightSideAC());
      darkModeStyle.className = "dark_mode--style light";
      darkModeStyle.href = "./light-mode.css";
    } else if (darkModeStyle.className === "dark_mode--style light") {
      dispatch(setDarkSideAC());
      darkModeStyle.className = "dark_mode--style dark";
      darkModeStyle.href = "./dark-mode.css";
    }
  }

  return (
    <div className="dark__mode">
      <h2>Dark Mode</h2>
      {props.darkMode ? (
        <button
          className="dark__mode--switcher btn_dark"
          onClick={darkModeSwitcher}
        >
          <i class="fas fa-moon"></i>
        </button>
      ) : (
        <button
          className="dark__mode--switcher btn_light"
          onClick={darkModeSwitcher}
        >
          <i class="fas fa-sun"></i>
        </button>
      )}
    </div>
  );
}

export default DarkMode;

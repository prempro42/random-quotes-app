import React from "react";
import sunIcon from "./../assets/sun.svg";
import moonIcon from "./../assets/moon.svg";

function ToggleModeButton({ ToggleDarkMode, state }) {
  return (
    <button
      className="absolute top-0 right-0 dark:bg-slate-700 bg-slate-300   text-gray-500   dark:text-white  p-4 rounded inline-flex items-center"
      onClick={ToggleDarkMode}
    >
      {!state.isDarkMode ? (
        <img src={moonIcon} className="w-6 mx-auto " alt="dark mode" />
      ) : (
        <img src={sunIcon} className="w-6 mx-auto" alt="light mode" />
      )}
    </button>
  );
}

export default ToggleModeButton;

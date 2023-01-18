import React, { useEffect, useState } from "react";

function Darkmode() {
  const [theme, setTheme] = useState("light");
  function toogleTheme() {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
  <div>
    <div onClick={toogleTheme} id="toogle"><i className="fa-solid fa-circle-half-stroke"></i></div>
  </div>
  );
}

export default Darkmode;

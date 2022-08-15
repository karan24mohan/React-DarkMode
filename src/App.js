import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [mode, setMode] = useState("lightTheme");

  const theme = () => {
    if (mode === "darkTheme") {
      setMode("lightTheme");
    } else {
      setMode("darkTheme");
    }
  };

  useEffect(() => {
    document.body.className = mode;
    console.log(mode);
  });

  return (
    <>
      <h1>Hello Welcome to React DarkMode Webpage</h1>
      <button onClick={theme}>Switch Mode</button>
    </>
  );
}

export default App;

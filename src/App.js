import React from "react";
import "./App.css";
import Toggle from "./Components/Toggle";

function App() {
  //   const [mode, setMode] = useState("lightTheme");

  //   const theme = () => {
  //     mode === "darkTheme" ? setMode("lightTheme") : setMode("darkTheme");
  //   };

  //   useEffect(() => {
  //     document.body.className = mode;
  //     console.log(mode);
  //   });

  return (
    <>
      <Toggle />
      {/* <h1>Hello Welcome to React DarkMode Webpage</h1>
      <button onClick={theme}>Switch Mode</button> */}
    </>
  );
}

export default App;

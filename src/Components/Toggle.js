import React, { useEffect, useState } from "react";

function Toggle() {
  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false;
  };
  const [darkTheme, setDarkTheme] = useState(getMode);
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(darkTheme));
  }, [darkTheme]);

  return (
    <>
      <div className="nav">
        <label className="switch">
          <input
            type="checkbox"
            checked={darkTheme}
            onChange={() => {
              setDarkTheme(!darkTheme);
            }}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div className={darkTheme ? "content darkTheme" : "content"}>
        <h1>{darkTheme ? "Dark Mode Is On" : "Light Mode Is On"}</h1>

        <div className="sub-content">
          <div className="image_div">
            <img
              src="data:image/jpeg;base64,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"
              alt="Tiger"
            />
          </div>
          <div className="para_div">
            <p>
              The tiger is the largest living cat species and a member of the
              genus Panthera. It is most recognisable for its dark vertical
              stripes on orange fur with a white underside. An apex predator, it
              primarily preys on ungulates, such as deer and wild boar.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Toggle;

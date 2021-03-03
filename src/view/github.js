import React from "react";
import githubLogo from "./github.png";

const divStyle = {
  marginLeft: "auto",
};

const github = () => {
  return (
    <div className="container" style={divStyle}>
      <a href="https://github.com/UniversallyRy/reacttactoe">
        <img src={githubLogo} style={{ color: "purple" }} alt="GitHub" />
      </a>
    </div>
  );
};

export default github;

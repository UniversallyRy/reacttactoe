import React from "react";
import githubLogo from "./github.png";

const github = () => {
  return (
    <div className="container" style={{ marginLeft: "auto" }}>
      <a href="https://github.com/UniversallyRy/reacttactoe">
        <img src={githubLogo} style={{ color: "purple" }} alt="GitHub" />
      </a>
    </div>
  );
};

export default github;

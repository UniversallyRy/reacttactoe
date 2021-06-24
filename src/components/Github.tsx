import githubLogo from "../view/github.png";

const Github = ():JSX.Element => {
  return (
    <div className="githubLogo" style={{  margin: 5 }}>
      <a href="https://github.com/UniversallyRy/reacttactoe">
        <img src={githubLogo} style={{ color: "purple" }} alt="GitHub" />
      </a>
    </div>
  );
};

export default Github;
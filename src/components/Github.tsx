import githubLogo from "../view/github.png";

export interface GithubProps {
}  

export const Github = ():JSX.Element => {
  return (
    <div className="githubLogo" style={{  margin: 5 }}>
      <a href="https://github.com/UniversallyRy/reacttactoe">
        <img src={githubLogo} style={{ color: "purple" }} alt="github" />
      </a>
    </div>
  );
};
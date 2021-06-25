import githubLogo from "../view/github.png";

export interface GithubProps {
}  

const Github: React.FunctionComponent<GithubProps> = ():JSX.Element => {
  return (
    <div className="githubLogo" style={{  margin: 5 }}>
      <a href="https://github.com/UniversallyRy/reacttactoe">
        <img src={githubLogo} style={{ color: "purple" }} alt="github" />
      </a>
    </div>
  );
};

export default Github;
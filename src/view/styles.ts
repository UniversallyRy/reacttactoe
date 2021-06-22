// styled-components used instead of plain css for personal perference of keeping everything JS
import styled, { keyframes } from "styled-components";

const flickerAnimation = keyframes`
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1 }
`;

const hideStatus = keyframes`
  0% {
    opacity: 1;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
`;

const AppWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: Fascinate, sans-serif;
  word-wrap: break-word;
`;

const BoardWrap = styled.div`
  margin-bottom: 10px;
  -webkit-user-select: none; /* Safari 3.1+ */
  -moz-user-select: none; /* Firefox 2+ */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Standard syntax */
`;
const BoardBackground = styled.div`
  background-color: #cbb4d4;
  border-radius: 15px;
  padding: 50px 30px 32px;
  box-shadow: 0 24px 45px -15px rgba(161, 159, 219, 0.41);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
`;

const GameTitle = styled.h1`
  background: #a044ff;
  border-radius: 5px;
  border: 0.5px solid #cbb4d4;
  color: #cbb4d4;
  font-size: 40px;
  font-weight: bold;
  height: 40px;
  line-height: 40px;
  text-align: center;
`;

const Status = styled.div`
  animation: ${hideStatus /* fades out status div after 5 seconds*/} 5s ease-in
    0.2s forwards;
  background: #5F9EA0;
  border-radius: 2px;
  box-shadow: 0 0 0 2px #5F9EA0, 2px 1px 2px 3px rgba(10, 10, 0, 0.5);
  color: #cbb4d4;
  font-size: 14px;
  font-weight: bold;
  line-height: 50px;
  height: 40px;
  margin-left: 190px;
  margin-bottom: 20px;
  text-align: center;
  width: 200px;
`;

const Reset = styled.div`
  margin-bottom: 20px;
`;

const ResetButton = styled.button<{ gameover: boolean }>`
  background: #cbb4d4;
  border: 0.5px solid #a044ff;
  box-shadow: 0 0 0 2px #cbb4d4, 2px 1px 2px 3px rgba(10, 10, 0, 0.5);
  color: #a044ff;
  font-family: Fascinate, sans-serif;
  font-size: 24px;
  font-weight: bold;
  height: 40px;
  line-height: 20px;
  margin-left: 160px;
  margin-top: 5px;
  opacity: 1;
  padding: 1px;
  text-align: center;
  width: 200px;
  visibility: ${
    // prop to hide reset button when game is over
    (props) => (props.gameover ? "visible" : "hidden")
  };

  &:hover {
    background: #a044ff;
    border: 1px dashed #a044ff;
    box-shadow: 0 0 0 2px #a044ff, 2px 1px 2px 3px rgba(10, 10, 0, 0.5);
    text-shadow: -1px #cbb4d4;
    color: #cbb4d4;
    float: none;
  }

  &:focus {
    outline: none;
  }
`;

const BoardRow = styled.div`
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`;

const Psquares = styled.button<{ player:string }>`
  background: ${
    // Props used to input player square colors when given a value
    (props) =>
      props.player === "player"
        ? "#5F9EA0"
        : props.player === "AI"
        ? "#000046"
        : "#cbb4d4"
  };
  color: ${(props) =>
    props.player === "player"
      ? "#cbb4d4"
      : props.player === "AI"
      ? "#B2FEFA"
      : "#F00000"};
  border: ${(props) =>
    props.player === "player"
      ? "1px dashed #5F9EA0"
      : props.player === "AI"
      ? "1px dashed #000046"
      : "1px dashed #cbb4d4"};
  border-radius: 2px;
  box-shadow: ${(props) =>
    props.player === "player"
      ? "0 0 0 4px #5F9EA0, 1px 4px 10px 10px rgba(60, 52, 102, 0.9)"
      : props.player === "AI"
      ? "0 0 0 4px #000046, 4px 2px 12px 8px rgba(10, 10, 0, 0.3)"
      : "0 0 0 4px #cbb4d4, 2px 1px 6px 4px rgba(10, 10, 0, 0.5)"};
  float: left;
  font-family: Fascinate, sans-serif;
  font-size: 50px;
  font-weight: bold;
  height: 150px;
  width: 150px;
  margin: 10px;
  text-align: center;
  text-shadow: 1px 0.6px #grey;

  &:focus {
    outline: none;
  }
  &:hover {
    background: #5F9EA0;
    border: 1px dashed #5F9EA0;
    border-radius: 1px;
    box-shadow: 0 0 0 4px #5F9EA0, 2px 1px 6px 4px rgba(10, 10, 0, 0.5);
    opacity: 1;
  }
`;

const OverlayCSS = styled.div<{ gameover: boolean, player: string }>`
  animation: ${flickerAnimation} 5s infinite;
  background: ${
    // Match overlay with whoever won
    (props) =>
      props.player === "O"
        ? "#cbb4d4"
        : props.player === "X"
        ? "#000046"
        : "#a044ff"
  };
  color: ${(props) =>
    props.player === "O"
      ? "#a044ff"
      : props.player === "X"
      ? "#cbb4d4"
      : "black"};
  border: ${(props) =>
    props.player === "O"
      ? "1px dashed #cbb4d4"
      : props.player === "X"
      ? "1px dashed #000046"
      : "1px dashed #a044ff"};
  border-radius: 10px;
  box-shadow: 0 0 0 2px #cbb4d4, 2px 1px 2px 3px rgba(10, 10, 0, 0.5);
  width: 400px;
  height: 400px;
  margin-left: 60px;
  margin-top: 120px;
  padding: 1px;
  position: absolute;
  visibility: ${
    // Prop to show overlay only when a game is over
    (props) => (props.gameover ? "visible" : "hidden")
  };
  &:hover {
    opacity: 0.5;
  }
`;
const OverlayText = styled.p`
  color:#cbb4d4;
  font-weight: bold;
  font-size: 30px;
  line-height: 150px;
  text-align: center;
`;

export {
  AppWrapper,
  BoardWrap,
  GameTitle,
  Status,
  Reset,
  ResetButton,
  BoardRow,
  Psquares,
  OverlayCSS,
  BoardBackground,
  OverlayText,
};

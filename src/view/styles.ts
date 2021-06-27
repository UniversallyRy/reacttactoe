// Board Stylings
import styled, { keyframes } from "styled-components";
import adaptive from '../util/adaptive';

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

const BoardWrap = styled.div`
  max-width: 100%;
  align-items: center;
  display: flex;
  margin-top: 3em;
  flex-wrap: wrap;
  flex-direction: column;
  font-family: Fascinate, sans-serif;
  -webkit-user-select: none; /* Safari 3.1+ */
  -moz-user-select: none; /* Firefox 2+ */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Standard syntax */

  @media (min-width: 768px) {
  margin-top: 3em; 
  }

  @media (min-width: 1024px) {
  margin-top: 1em;
  }
  
`;

const BoardBackground = styled.div`
  background-color: #cbb4d4;
  border-radius: 1.2em;
  padding: 2em;
 
`;

const GameTitle = styled.h1`
  background: #a044ff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: .2em;
  border: 0.5px solid #cbb4d4;
  color: #cbb4d4;
  font-weight: bold;
  text-align: center;
  font-size: 4em;

  @media (min-width: 1024px) {
    font-size: 2.3em;
  }
`;

const Status = styled.div`
  animation: ${hideStatus /* fades out status div after 5 seconds*/} 5s ease-in
    0.2s forwards;
  background: #5F9EA0;
  border-radius: .2em;
  box-shadow: 0 0 0 2px #5F9EA0, 2px 1px 2px 3px rgba(10, 10, 0, 0.5);
  color: #cbb4d4;
  font-weight: bold;
  font-size: 2em;
  line-height: 2.5em;
  height: 2.5em;
  margin-bottom: 1em;
  text-align: center;
  width: 10em;

  @media (min-width: 768px) {
    width: 12em;
    height: 2em;
    line-height: 2em;
    font-size: 1.1em;
  }

  @media (min-width: 1024px) {
    width: 10em;
    height: 1.2em;
    line-height: 1.2em;
    font-size: 1em;
  }
`;

const Reset = styled.div`
  margin-bottom: 1em;
  display: flex;
  justify-content: center;
`;

const Button = styled.button<{ gameover?: boolean }>`
  background: #cbb4d4;
  border: 0.5px solid #a044ff;
  box-shadow: 0 0 0 2px #cbb4d4, 2px 1px 2px 3px rgba(10, 10, 0, 0.5);
  color: #a044ff;
  font-family: Fascinate, sans-serif;
  font-weight: bold;
  font-size: 2em;
  height: 2.5em;
  line-height: 2em;
  padding: 1px;
  text-align: center;
  width: 8.5em;
  visibility: ${
    // prop to hide reset button when game is over
    (props) => (!props.gameover ? "visible" : "hidden")
  };
  &:hover {
    background: #a044ff;
    border: 1px dashed #a044ff;
    box-shadow: 0 0 0 2px #a044ff, 2px 1px 2px 3px rgba(10, 10, 0, 0.5);
    text-shadow: -1px #cbb4d4;
    color: #cbb4d4;
  }
  &:focus {
    outline: none;
  }

  @media (min-width: 1024px) {
    font-size: 1.2em;
    height: 1.5em;
    line-height: 1em;
  }
`;

const BoardRow = styled.div`
  &:after {
    clear: both;
    content: "";
    display: grid;
  }
`;

const SquareCSS = styled.button<{ player:string }>`
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
      ? "0 0 0 4px #5F9EA0, 0.5px 1.5px 3px 3px rgba(60, 52, 102, 0.9)"
      : props.player === "AI"
      ? "0 0 0 4px #000046, 4px 2px 12px 8px rgba(10, 10, 0, 0.3)"
      : "0 0 0 4px #cbb4d4, 2px 1px 6px 4px rgba(10, 10, 0, 0.5)"};
  font-family: Fascinate, sans-serif;
  width: ${adaptive(300)};
  min-height: ${adaptive(300)};
  margin: .6em;
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

  @media (min-width: 768px) {
    width: ${adaptive(250)};
    min-height: ${adaptive(250)};
    margin: .6em;
  }

  @media (min-width: 1024px) {
    width: ${adaptive(120)};
    min-height: ${adaptive(120)};
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
  width: ${adaptive(1040)};
  min-height: ${adaptive(1250)};
  font-size: 3em;
  height: 3.5em;
  line-height: 3em;
  padding: 1px;
  position: absolute;
  visibility: ${
    // Prop to show overlay only when a game is over
    (props) => (!props.gameover ? "hidden": "visible")
  };
  &:hover {
    opacity: 0.5;
  }
  @media (min-width: 768px) {
    width: ${adaptive(820)};
    min-height: ${adaptive(1000)};
    font-size: 5em;
  }

  @media (min-width: 1024px) {
    width: ${adaptive(410)};
    min-height: ${adaptive(490)};
    font-size: 2.2em;
  }
`;

const OverlayText = styled.p`
  color:#cbb4d4;
  font-weight: bold;
  line-height: 5em;
  text-align: center;
`;

export {
  BoardWrap,
  GameTitle,
  Status,
  Reset,
  Button,
  BoardRow,
  SquareCSS,
  OverlayCSS,
  BoardBackground,
  OverlayText,
};

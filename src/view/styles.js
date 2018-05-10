import styled from 'styled-components';
import { keyframes } from "styled-components";import { injectGlobal } from 'styled-components';

injectGlobal`
  html {
    height: 100vh;
    width: 100%;
  }
`

const flickerAnimation = keyframes`
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
`;

const AppWrapper = styled.div`
  font-family: Fascinate, sans-serif;
  height:100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  background:
    -webkit-linear-gradient(45deg, hsla(243, 100%, 49%, 1) 0%, hsla(243, 100%, 49%, 0) 70%),
    -webkit-linear-gradient(315deg, hsla(244, 91%, 44%, 1) 10%, hsla(244, 91%, 44%, 0) 80%),
    -webkit-linear-gradient(225deg, hsla(211, 99%, 50%, 1) 10%, hsla(211, 99%, 50%, 0) 80%),
    -webkit-linear-gradient(135deg, hsla(10, 97%, 49%, 1) 100%, hsla(10, 97%, 49%, 0) 70%);
  background:
    linear-gradient(45deg, hsla(243, 100%, 49%, 1) 0%, hsla(243, 100%, 49%, 0) 70%),
    linear-gradient(135deg, hsla(244, 91%, 44%, 1) 10%, hsla(244, 91%, 44%, 0) 80%),
    linear-gradient(225deg, hsla(211, 99%, 50%, 1) 10%, hsla(211, 99%, 50%, 0) 80%),
    linear-gradient(315deg, hsla(10, 97%, 49%, 1) 100%, hsla(10, 97%, 49%, 0) 70%);
  opacity: 0.7;
`;

const BoardWrap = styled.div`
  margin-top: 100px;
  -webkit-user-select: none; /* Safari 3.1+ */
  -moz-user-select: none; /* Firefox 2+ */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Standard syntax */
`;

const Border = styled.div`
  border: 3px solid #00008B;
`;

const GameTitle = styled.h1`
  background: #4169E1;
  border: 1px dashed #00008B;
  border-radius: 50px;
  box-shadow: 0 0 0 2px #4169E1, 1px 3px 5px 2px rgba(10, 10, 0, 0.5);
  color: #00008B;
  float: none;
  font-size: 50px;
  font-weight: bold;
  height: 90px;
  line-height: 90px;
  margin: 19px;
  padding: auto;
  text-align: center;
  width: 600px;
`;

const Status = styled.div`
  color:#00008B;
  background: #4169E1;
  border: .5px dashed #00008B;
  border-radius: 2px;
  box-shadow: 0 0 0 2px #4169E1, 2px 1px 2px 3px rgba(10, 10, 0, 0.5);
  font-size: 24px;
  font-weight: bold;
  line-height: 20px;
  float: none;
  height: 20px;
  margin-left: 210px;
  margin-bottom: 50px;
  padding: 1px;
  text-align: center;
  width: 200px;
  opacity: .7;
`;

const OverlayCSS = styled.div`
  border-radius: 50px;
  border: 1px dashed #4169E1;
  box-shadow: 0 0 0 2px #00008B, 2px 1px 2px 3px rgba(10, 10, 0, 0.5);
  float: none;
  font-size: 50px;
  font-weight: bold;
  visibility: ${
      props => props.gameover ? "visible" : "hidden"
    };
  width: 400px;
  background-color: #00008B;
  color: #FFF;
  text-align: center;
  vertical-align: middle;
  word-wrap: break-word;
  padding: 1px;
  position: absolute;
  margin-top: 120px;
  margin-left: 120px
  height: 400px;
  line-height: 200px;
  animation: ${flickerAnimation} 5s infinite;

  &:hover {
    opacity: 0.7;
  }

`;

const Reset = styled.div`
  margin-bottom: 20px;
  padding: auto;
`;

const ResetButton = styled.button`
  border-radius: 180px;
  background: #4169E1;
  border: 1px dashed #00008B;
  box-shadow: 0 0 0 2px #4169E1, 2px 1px 2px 3px rgba(10, 10, 0, 0.5);
  color: #00008B;
  margin-left: 210px;
  font-size: 24px;
  font-weight: bold;
  height: 40px;
  line-height: 20px;
  margin-top: 10px;
  padding: 1px;
  text-align: center;
  width: 200px;
  opacity: .9;
  font-family: Fascinate, sans-serif;
  visibility: ${
      props => props.gameover ? "visible" : "hidden"
    };
    &:hover {
      background: #00008B;
      border: 1px dashed #00008B;
      box-shadow: 0 0 0 2px #00008B, 2px 1px 2px 3px rgba(10, 10, 0, 0.5);
      color: #4169E1;
      border-radius: 10px;
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
const Psquare = styled.button`
  font-family: Fascinate, sans-serif;
  background: ${
      props => props.player === 'player' ? "#3175e2" : props.player === 'AI' ? "#7aadff" : "#584ef5"
    };
  color: #00008B;
  border: 1px dashed #00008B;
  border-radius: 10px;
  box-shadow: ${
      props => props.player === 'player' ? "0 0 0 4px #3175e2, 2px 1px 6px 4px rgba(10, 10, 0, 0.5)" : props.player === 'AI' ? "0 0 0 4px #7aadff, 2px 1px 6px 4px rgba(10, 10, 0, 0.5)" : "0 0 0 4px #584ef5, 2px 1px 6px 4px rgba(10, 10, 0, 0.5)"
    };
  float: left;
  font-size: 100px;
  font-weight: bold;
  height: 200px;
  margin: 7px;
  text-align: center;
  text-shadow: -1px -1px #00008B;
  width: 200px;
  opacity: ${
    props => props.player === 'player' ? "1" : props.player === 'AI' ? ".8" : ".6"
};

  &:focus {
    outline: none;
  }
  &:hover {
    background: #00008B;
    border-radius: 10px;
    box-shadow: 0 0 0 4px #00008B, 2px 1px 6px 4px rgba(10, 10, 0, 0.5);
  }
`

export {AppWrapper, BoardWrap, Border, GameTitle, OverlayCSS, Status, Reset, ResetButton, BoardRow, Psquare};

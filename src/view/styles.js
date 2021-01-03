// styled-components used instead of plain css for personal perference of keeping everything JS
import styled, {keyframes} from 'styled-components';

// const GlobalStyle = createGlobalStyle`
//   html {
//     height: 100%;
//     width: 100%;
//   }
// `;

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
  margin: 0 auto;
  margin-bottom: ;
  clear: both;
  align-items: center;
  background: #673AB7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #512DA8, #673AB7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #512DA8, #673AB7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  flex-direction: column;
  font-family: Fascinate, sans-serif;
  height:100%;
  word-wrap: break-word;
`;

const BoardWrap = styled.div`
  // background-color: #6190E8;
  margin-top: 50px;
  margin-bottom: 10px;
  -webkit-user-select: none; /* Safari 3.1+ */
  -moz-user-select: none; /* Firefox 2+ */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Standard syntax */
`;

const GameTitle = styled.h1`
  background: #a044ff;
  border-radius: -1px;
  border: .5px solid #cbb4d4;
  color: #cbb4d4;
  float: none;
  font-size: 40px;
  font-weight: bold;
  height: 40px;
  line-height: 40px;
  margin-left: 40px;
  padding: auto;
  text-align: center;
  width: 420px;
`;

const Status = styled.div`
  animation: ${hideStatus /* fades out status div after 5 seconds*/} 5s ease-in .2s forwards;
  background: #cbb4d4;
  border-radius: 2px;
  box-shadow: 0 0 0 2px #cbb4d4, 2px 1px 2px 3px rgba(10, 10, 0, 0.5);
  color:#a044ff;
  font-size: 14px;
  font-weight: bold;
  line-height: 50px;
  float: none;
  height: 50px;
  margin-left: 160px;
  margin-bottom: 50px;
  padding: auto;
  text-align: center;
  width: 200px;
`;

const Reset = styled.div`
  margin-bottom: 20px;

`;

const ResetButton = styled.button`
  background: #cbb4d4;
  border: .5px solid #a044ff;
  box-shadow: 0 0 0 2px #cbb4d4, 2px 1px 2px 3px rgba(10, 10, 0, 0.5);
  color: #a044ff;
  font-family: Fascinate, sans-serif;
  font-size: 24px;
  font-weight: bold;
  height: 40px;
  line-height: 20px;
  margin-left: 160px;
  margin-top: 10px;
  opacity: 1;
  padding: 1px;
  text-align: center;
  width: 200px;
  visibility: ${
    // prop to hide reset button when game is over
      props => props.gameover ? "visible" : "hidden"
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

const Psquares = styled.button`
  background: ${
    // Props used to input player square colors when given a value
    props => props.player === 'player' ? "#cbb4d4" : props.player === 'AI' ? "#000046" : "#a044ff"
  };
  color: ${
    props => props.player === 'player' ? "#a044ff" : props.player === 'AI' ? "#B2FEFA" : "#F00000"
  };
  border:${
    props => props.player === 'player' ? "1px dashed #cbb4d4" : props.player === 'AI' ? "1px dashed #000046" : "1px dashed #a044ff"
  };
  border-radius: 2px;
  box-shadow: ${
    props => props.player === 'player' ? "0 0 0 4px #cbb4d4, 1px 4px 10px 10px rgba(60, 52, 102, 0.9)" : props.player === 'AI' ? "0 0 0 4px #000046, 4px 2px 12px 8px rgba(10, 10, 0, 0.3)" : "0 0 0 4px #a044ff, 2px 1px 6px 4px rgba(10, 10, 0, 0.5)"
  };
  float: left;
  font-family: Fascinate, sans-serif;
  font-size: 50px;
  font-weight: bold;
  height: 150px;
  width: 150px;
  margin: 10px;
  text-align: center;
  text-shadow: 1px .6px #grey;

    &:focus {
      outline: none;
    }
    &:hover {
      background: #cbb4d4;
      border: 1px dashed #cbb4d4;
      border-radius: 1px;
      box-shadow: 0 0 0 4px #cbb4d4, 2px 1px 6px 4px rgba(10, 10, 0, 0.5);
      opacity: 1;
    }
`;

const OverlayCSS = styled.div`
  animation: ${flickerAnimation} 5s infinite;
  background: ${
    // Match overlay with whoever won
    props => props.player === 'O' ? "#cbb4d4" : props.player === 'X' ? "#000046" : "#a044ff"
  };
  color: ${
    props => props.player === 'O' ? "#a044ff" : props.player === 'X' ? "#cbb4d4" : "black"
  };
  border:${
    props => props.player === 'O' ? "1px dashed #cbb4d4" : props.player === 'X' ? "1px dashed #000046" : "1px dashed #a044ff"
  };
  border-radius: 10px;
  box-shadow: 0 0 0 2px #cbb4d4, 2px 1px 2px 3px rgba(10, 10, 0, 0.5);
  float: none;
  font-size: 50px;
  font-weight: bold;
  height: 400px;
  line-height: 200px;
  margin-left: 60px;
  margin-top: 120px;
  padding: 1px;
  position: absolute;
  text-align: center;
  vertical-align: middle;
  visibility: ${
    // Prop to show overlay only when a game is over
    props => props.gameover ? "visible" : "hidden"
  };
  width: 400px;
  word-wrap: break-word;

    &:hover {
      opacity: 0.5;
    }

`;

export {AppWrapper, BoardWrap, GameTitle, Status, Reset, ResetButton, BoardRow, Psquares, OverlayCSS};
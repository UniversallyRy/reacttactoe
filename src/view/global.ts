import { createGlobalStyle } from "styled-components";
import adaptive from "../util/adaptive";

export const Global = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    :root {
      font-size: ${adaptive(24)};


      @media (min-width: 768px) {
        font-size: ${adaptive(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${adaptive(16)};
      }
    }
`;

export default Global;

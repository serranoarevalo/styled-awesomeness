import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";
import App from "./src/App";
import reset from "styled-reset";

injectGlobal`
${reset}
`;

ReactDOM.render(<App />, document.getElementById("root"));

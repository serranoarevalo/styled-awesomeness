import React, { Fragment } from "react";
import "./styles.css";
/*
    Goal:
        - Make a button
        - Give hover and active states
        - Change the color of the button depending on the props
*/

const App = () => (
  <Fragment>
    <Button />
    <Button danger />
  </Fragment>
);

const Button = ({ danger }) => (
  <button
    className={danger ? "button button--danger" : "button button--success"}
  >
    Button!
  </button>
);

export default App;

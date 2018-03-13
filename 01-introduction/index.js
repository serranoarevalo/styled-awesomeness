import React, { Fragment } from "react";
import styled from "styled-components";
/*
    Goal:
        - Make a button
        - Give hover and active states
        - Change the background color of the button depending on the props
*/

const Button = styled.button`
  -webkit-appearance: none;
  border-radius: 50px;
  padding: 5px 0;
  min-width: 200px;
  color: white;
  border: 0;
  font-weight: 600;
  cursor: pointer;
  background-color: ${props => (props.danger ? "#e74c3c" : "#57b65f")};
  &:focus,
  &:active {
    outline: none;
  }
  &:hover {
    background-color: ${props => (props.danger ? "#f05d4c" : "#65d36e")};
  }
`;

const App = () => (
  <Fragment>
    <Button>Button!</Button>
    <Button danger>Button!</Button>
  </Fragment>
);

export default App;

import React, { Fragment } from "react";
import styled, { injectGlobal, keyframes } from "styled-components";

const Button = styled.button`
  -webkit-appearance: none;
  border-radius: 50px;
  padding: 5px 10px;
  min-width: 200px;
  color: white;
  border: 0;
  font-weight: 600;
  cursor: pointer;
  background-color: ${props => (props.danger ? "#e74c3c" : "#57b65f")};
  font-size: 14px;
  &:focus,
  &:active {
    outline: none;
  }
  &:hover {
    background-color: ${props => (props.danger ? "#f05d4c" : "#65d36e")};
  }
`;

const rotation = keyframes`
  from {
    transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

const RotatingBtn = Button.extend`
  ${props => {
    if (!props.danger) {
      return `animation: ${rotation} 2s linear infinite;`;
    }
  }};
`;

const App = () => (
  <Fragment>
    <RotatingBtn>Button!</RotatingBtn>
    <RotatingBtn danger>Button!</RotatingBtn>
  </Fragment>
);

injectGlobal`
  body{
    background-color:pink;
    font-family:Helvetica;
  }
`;

export default App;

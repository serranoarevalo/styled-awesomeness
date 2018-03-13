import React, { Fragment } from "react";
import styled, { injectGlobal } from "styled-components";

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

const AwesomerButton = Button.extend`
  border: 1px solid red;
`;

const Anchor = Button.withComponent("a").extend`
  text-decoration: none;
`;

const App = () => (
  <Fragment>
    <Button>Button!</Button>
    <Button danger>Button!</Button>
    <AwesomerButton>Awesomer</AwesomerButton>
    <Anchor href="#">Go somewhere!</Anchor>
  </Fragment>
);

injectGlobal`
  body{
    background-color:pink;
    font-family:Helvetica;
  }
`;

export default App;

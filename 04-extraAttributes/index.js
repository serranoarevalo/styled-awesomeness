import React, { Fragment } from "react";
import styled, { css } from "styled-components";

const Input = styled.input.attrs({
  required: true
})`
  border: 1px solid blue;
`;

const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const Container = styled.div`
  ${awesomeCard};
`;

const App = () => (
  <Container>
    <Input placeholder="hello" />
    <Input placeholder="hello" type="password" />
  </Container>
);

export default App;

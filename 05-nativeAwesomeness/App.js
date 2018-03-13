import React from "react";
import styled from "styled-components";

const Cointainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 10px 50px;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 18px;
`;

export default class App extends React.Component {
  render() {
    return (
      <Cointainer>
        <Title>Open up App.js to start working on your app!</Title>
      </Cointainer>
    );
  }
}

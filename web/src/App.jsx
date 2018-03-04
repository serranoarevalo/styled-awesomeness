import React, { Fragment } from "react";
import styled from "styled-components";

const Header = styled.header`
  height: 80vh;
  width: 100%;
  background-image: url(${require("../../images/headerBg.jpg")});
  background-size: cover;
`;

const App = () => (
  <Fragment>
    <Header />
  </Fragment>
);

export default App;

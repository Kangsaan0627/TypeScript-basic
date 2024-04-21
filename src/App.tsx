import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import Router from "./Router";

const GlobalStyle = createGlobalStyle`
  body{
    color:red;
  }
`

function App() {
 return <>
  <GlobalStyle/>
  <Router/>
  </>
}

export default App;

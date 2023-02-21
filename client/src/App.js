import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Mainpage from "./page/MainPage";
import LoginPage from "./page/LoginPage";
import SignupPage from "./page/SignupPage";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
  width: 97rem;
  max-width: 100%;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

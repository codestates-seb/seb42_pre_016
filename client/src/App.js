import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mainpage from "./page/MainPage";
import LoginPage from "./page/LoginPage";
import SignupPage from "./page/SignupPage";
import LogputPage from "./page/LogputPage";
import QuestionPage from "./page/QuestionPage";
import Mypage from "./page/MyPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/logout" element={<LogputPage />} />
          <Route path="/questions" element={<QuestionPage />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

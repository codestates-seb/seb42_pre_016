import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mainpage from "./page/MainPage";
import LoginPage from "./page/LoginPage";
import SignupPage from "./page/SignupPage";
import LogoutPage from "./page/LogoutPage";
import QuestionPage from "./page/QuestionPage";
import Mypage from "./page/MyPage";
import AskQuestionsPage from "./page/AskQuestionsPage";
import SignupSuccess from "./page/SignupSuccess";
import QuestionEditPage from "./page/QuestionEditPage";
import AnswerEditPage from "./page/AnswerEditPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Mainpage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/questions/" element={<QuestionPage />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/askquestions" element={<AskQuestionsPage />} />
          <Route path="/siunpsuccess" element={<SignupSuccess />} />
          <Route path="/questionedit" element={<QuestionEditPage />} />
          <Route path="/answeredit" element={<AnswerEditPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

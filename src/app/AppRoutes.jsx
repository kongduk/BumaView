import Main from "@/page/main/Main";
import Question from "@/page/question/Question";
import { Routes, Route } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="question" element={<Question />} />
      <Route path="interview" element={<p>임시</p>} />
      <Route path="analyze" element={<p>임시</p>} />
    </Routes>
  );
};

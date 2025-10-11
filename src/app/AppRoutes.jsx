import Main from "@/page/main/Main";
import Question from "@/page/question/Question";
import { Routes, Route } from "react-router-dom";
import MyQuestion from "@/page/question/myQuestion/Question";
import NewQuestion from "@/page/question/newQuestion/Question";
import Interview from "@/page/Interview/Interview";
import CompanyInterview from "@/page/Interview/companyInterview/company";
// import MyInterview from "@/page/Interview/myInterview/Question";
// import NewInterview from "@/page/Interview/newInterview/Question";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="question" element={<Question />} />
      <Route path="question/my" element={<MyQuestion />} />
      <Route path="question/new" element={<NewQuestion />} />
      <Route path="interview" element={<Interview />} />
      <Route path="interview/:id" element={<CompanyInterview />} />
      {/* <Route path="interview/my" element={<MyInterview />} />
      <Route path="interview/new" element={<NewInterview />} /> */}
      <Route path="analyze" element={<p>임시</p>} />
    </Routes>
  );
};

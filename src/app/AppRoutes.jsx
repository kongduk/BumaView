import Main from "@/page/main/Main";
import Question from "@/page/question/Question";
import { Routes, Route } from "react-router-dom";
import MyQuestion from "@/page/question/myQuestion/Question";
import NewQuestion from "@/page/question/newQuestion/NewQuestion";
import Interview from "@/page/Interview/Interview";
import CompanyInterview from "@/page/Interview/companyInterview/company";
import FieldInterview from "@/page/Interview/fieldInterview/FieldInterview";
import MyInterview from "@/page/Interview/myInterview/MyInterview";
import NewInterview from "@/page/Interview/newInterview/NewInterview";
import CompanyList from "@/page/company/CompanyList";
import NewCompany from "@/page/company/NewCompany";
import CompanyDetail from "@/page/company/CompanyDetail";
import MyResumes from "@/page/resume/MyResumes";
import NewResume from "@/page/resume/NewResume";
import SharedResumes from "@/page/resume/SharedResumes";
import SharedResumeDetail from "@/page/resume/SharedResumeDetail";
import EditResume from "@/page/resume/EditResume";
import MyResumeDetail from "@/page/resume/MyResumeDetail";
import ExpectedQuestionsList from "@/page/expected/ExpectedQuestionsList";
import CreateExpectedQuestions from "@/page/expected/CreateExpectedQuestions";
import ExpectedQuestionDetail from "@/page/expected/ExpectedQuestionDetail";
import QuestionDetail from "@/page/question/detail/QuestionDetail";
import EditQuestion from "@/page/question/edit/EditQuestion";
import Analyze from "@/page/analyze/Analyze";
import ReviewList from "@/page/review/ReviewList";
import NewReview from "@/page/review/NewReview";
import EditReview from "@/page/review/EditReview";
import ReviewDetail from "@/page/review/ReviewDetail";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="question" element={<Question />} />
      <Route path="question/my" element={<MyQuestion />} />
      <Route path="question/new" element={<NewQuestion />} />
      <Route path="interview" element={<Interview />} />
      <Route path="interview/:id" element={<CompanyInterview />} />
      <Route path="interview/field/:field" element={<FieldInterview />} />
      <Route path="interview/my" element={<MyInterview />} />
      <Route path="interview/new" element={<NewInterview />} />
      <Route path="analyze" element={<Analyze />} />
      <Route path="company" element={<CompanyList />} />
      <Route path="company/new" element={<NewCompany />} />
      <Route path="company/:id" element={<CompanyDetail />} />
      <Route path="resume/my" element={<MyResumes />} />
      <Route path="resume/:id" element={<MyResumeDetail />} />
      <Route path="resume/new" element={<NewResume />} />
      <Route path="resume/shared" element={<SharedResumes />} />
      <Route path="resume/shared/:id" element={<SharedResumeDetail />} />
      <Route path="resume/edit/:id" element={<EditResume />} />
      <Route path="expected" element={<ExpectedQuestionsList />} />
      <Route path="expected/new" element={<CreateExpectedQuestions />} />
      <Route path="expected/:id" element={<ExpectedQuestionDetail />} />
      <Route path="question/:id" element={<QuestionDetail />} />
      <Route path="question/edit/:id" element={<EditQuestion />} />
      <Route path="review/list/:questionId" element={<ReviewList />} />
      <Route path="review/new/:questionId" element={<NewReview />} />
      <Route path="review/:reviewId" element={<ReviewDetail />} />
      <Route path="review/edit/:reviewId" element={<EditReview />} />
    </Routes>
  );
};
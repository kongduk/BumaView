
import React, { useState } from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export default function NewQuestion() {
  const [questions, setQuestions] = useState([{ company: "", category: "Web", field: "", question: "" }]);
  const navigate = useNavigate();

  const categories = ["Web", "Ai", "Security", "Embedded", "Game"];

  const handleAddQuestion = () => {
    setQuestions([...questions, { company: "", category: "Web", field: "", question: "" }]);
  };

  const handleDeleteQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  const handleQuestionChange = (index, prop, value) => {
    const newQuestions = [...questions];
    newQuestions[index][prop] = value;
    setQuestions(newQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save the new questions
    console.log(questions);
    // Redirect to the question list page
    navigate("/question");
  };

  return (
    <S.Container>
      <S.Flex>
        <S.Left>
          <S.Main>
            <S.FormContainer>
              <S.FormTitle>새 질문 등록</S.FormTitle>
              <form onSubmit={handleSubmit}>
                {questions.map((q, index) => (
                  <S.QuestionForm key={index}>
                    <S.FormGroup>
                      <S.Label htmlFor={`company-${index}`}>회사 이름</S.Label>
                      <S.Input
                        type="text"
                        id={`company-${index}`}
                        value={q.company}
                        onChange={(e) => handleQuestionChange(index, "company", e.target.value)}
                        required
                      />
                    </S.FormGroup>
                    <S.FormGroup>
                      <S.Label htmlFor={`category-${index}`}>분야</S.Label>
                      <S.Select
                        id={`category-${index}`}
                        value={q.category}
                        onChange={(e) => handleQuestionChange(index, "category", e.target.value)}
                      >
                        {categories.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </S.Select>
                    </S.FormGroup>
                    <S.FormGroup>
                      <S.Label htmlFor={`field-${index}`}>세부 분야</S.Label>
                      <S.Input
                        type="text"
                        id={`field-${index}`}
                        value={q.field}
                        onChange={(e) => handleQuestionChange(index, "field", e.target.value)}
                      />
                    </S.FormGroup>
                    <S.FormGroup>
                      <S.Label htmlFor={`question-${index}`}>질문</S.Label>
                      <S.Textarea
                        id={`question-${index}`}
                        value={q.question}
                        onChange={(e) => handleQuestionChange(index, "question", e.target.value)}
                        required
                      />
                    </S.FormGroup>
                    {index > 0 && (
                      <S.DeleteButton type="button" onClick={() => handleDeleteQuestion(index)}>
                        삭제
                      </S.DeleteButton>
                    )}
                  </S.QuestionForm>
                ))}
                <S.AddButton type="button" onClick={handleAddQuestion}>질문 추가하기</S.AddButton>
                <S.SubmitButton type="submit">모든 질문 등록</S.SubmitButton>
              </form>
            </S.FormContainer>
          </S.Main>
        </S.Left>
        <S.Right>
          <S.SidebarContainer>
            <S.SidebarTitle onClick={() => navigate("/question")}>Question</S.SidebarTitle>
            <S.SidebarItem onClick={() => navigate("/question/my")}>My Question</S.SidebarItem>
            <S.SidebarItem onClick={() => navigate("/question/new")}>New Question</S.SidebarItem>
          </S.SidebarContainer>
        </S.Right>
      </S.Flex>
    </S.Container>
  );
}

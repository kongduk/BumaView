
import React, { useState } from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export default function CreateExpectedQuestions() {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState(["", "", ""]);
  const navigate = useNavigate();

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, ""]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save the new expected questions
    console.log({ title, questions });
    navigate("/expected");
  };

  return (
    <S.Container>
      <S.Main>
        <S.Title>예상 질문 리스트 만들기</S.Title>
        <form onSubmit={handleSubmit}>
          <S.FormGroup>
            <S.Label htmlFor="title">제목</S.Label>
            <S.Input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </S.FormGroup>
          {questions.map((question, index) => (
            <S.FormGroup key={index}>
              <S.Label htmlFor={`question-${index}`}>예상 질문 {index + 1}</S.Label>
              <S.Textarea
                id={`question-${index}`}
                value={question}
                onChange={(e) => handleQuestionChange(index, e.target.value)}
                required
              />
            </S.FormGroup>
          ))}
          <S.AddButton type="button" onClick={handleAddQuestion}>질문 추가</S.AddButton>
          <S.SubmitButton type="submit">저장</S.SubmitButton>
        </form>
      </S.Main>
    </S.Container>
  );
}

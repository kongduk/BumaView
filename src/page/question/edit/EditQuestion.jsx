
import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import questions from "@/data/question";

export default function EditQuestion() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const q = questions.find((q) => q.id === parseInt(id));
    if (q) {
      setQuestion(q);
    } else {
      // Handle question not found
      navigate("/question");
    }
  }, [id, navigate]);

  const handleChange = (field, value) => {
    setQuestion({ ...question, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save the updated question
    console.log(question);
    navigate(`/question/${id}`);
  };

  if (!question) {
    return <div>로딩중...</div>;
  }

  return (
    <S.Container>
      <S.Main>
        <S.FormContainer>
          <S.FormTitle>질문 수정</S.FormTitle>
          <form onSubmit={handleSubmit}>
            <S.FormGroup>
              <S.Label htmlFor="company">회사 이름</S.Label>
              <S.Input
                type="text"
                id="company"
                value={question.company}
                onChange={(e) => handleChange("company", e.target.value)}
                required
              />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label htmlFor="category">분야</S.Label>
              <S.Select
                id="category"
                value={question.category}
                onChange={(e) => handleChange("category", e.target.value)}
              >
                {["Web", "Ai", "Security", "Embedded", "Game"].map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </S.Select>
            </S.FormGroup>
            <S.FormGroup>
              <S.Label htmlFor="field">세부 분야</S.Label>
              <S.Input
                type="text"
                id="field"
                value={question.field}
                onChange={(e) => handleChange("field", e.target.value)}
              />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label htmlFor="question">질문</S.Label>
              <S.Textarea
                id="question"
                value={question.question}
                onChange={(e) => handleChange("question", e.target.value)}
                required
              />
            </S.FormGroup>
            <S.SubmitButton type="submit">수정 완료</S.SubmitButton>
          </form>
        </S.FormContainer>
      </S.Main>
    </S.Container>
  );
}

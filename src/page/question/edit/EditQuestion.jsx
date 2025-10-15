import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useQuestionDetails, useUpdateQuestion } from "@/lib/hooks/useQuestion";

export default function EditQuestion() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: initialQuestion, isLoading, isError, error } = useQuestionDetails(id);
  const updateMutation = useUpdateQuestion();

  const [question, setQuestion] = useState(null);

  useEffect(() => {
    if (initialQuestion) {
      setQuestion(initialQuestion);
    }
  }, [initialQuestion]);

  const handleChange = (field, value) => {
    setQuestion({ ...question, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMutation.mutate({ id, ...question }, {
      onSuccess: () => {
        navigate(`/question/${id}`);
      }
    });
  };

  if (isLoading) {
    return <S.Container><S.Main><div>질문을 불러오는 중입니다...</div></S.Main></S.Container>;
  }

  if (isError) {
    return <S.Container><S.Main><div>질문을 불러오는데 오류가 발생했습니다: {error.message}</div></S.Main></S.Container>;
  }

  if (!question) {
    return <S.Container><S.Main><div>질문을 찾을 수 없습니다.</div></S.Main></S.Container>;
  }

  return (
    <S.Container>
      <S.Main>
        <S.FormContainer>
          <S.FormTitle>질문 수정</S.FormTitle>
          <form onSubmit={handleSubmit}>
            <S.FormGroup>
              <S.Label htmlFor="company_id">회사 ID</S.Label>
              <S.Input
                type="number"
                id="company_id"
                value={question.company_id}
                onChange={(e) => handleChange("company_id", parseInt(e.target.value))}
                required
              />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label htmlFor="occupation_id">분야</S.Label>
              <S.Select
                id="occupation_id"
                value={question.occupation_id}
                onChange={(e) => handleChange("occupation_id", e.target.value)}
              >
                {["Web", "Ai", "Security", "Embedded", "Game"].map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </S.Select>
            </S.FormGroup>
            <S.FormGroup>
              <S.Label htmlFor="question_text">질문</S.Label>
              <S.Textarea
                id="question_text"
                value={question.question_text}
                onChange={(e) => handleChange("question_text", e.target.value)}
                required
              />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label htmlFor="model_answer">모범답안</S.Label>
              <S.Textarea
                id="model_answer"
                value={question.model_answer}
                onChange={(e) => handleChange("model_answer", e.target.value)}
                required
              />
            </S.FormGroup>
            <S.FormGroup>
                <S.Label>난이도</S.Label>
                <S.Select value={question.difficulty} onChange={(e) => handleChange("difficulty", e.target.value)}>
                    <option value="상">상</option>
                    <option value="중">중</option>
                    <option value="하">하</option>
                </S.Select>
            </S.FormGroup>
            <S.SubmitButton type="submit" disabled={updateMutation.isLoading}>
              {updateMutation.isLoading ? '수정 중...' : '수정 완료'}
            </S.SubmitButton>
          </form>
        </S.FormContainer>
      </S.Main>
    </S.Container>
  );
}
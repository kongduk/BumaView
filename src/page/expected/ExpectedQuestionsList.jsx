
import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import expectedQuestions from "@/data/expectedQuestions";

export default function ExpectedQuestionsList() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Main>
        <S.Title>면접 예상 질문</S.Title>
        <S.AddButton onClick={() => navigate("/expected/new")}>예상 질문 리스트 만들기</S.AddButton>
        <S.QuestionSetListContainer>
          {expectedQuestions.map((questionSet) => (
            <S.QuestionSetCard key={questionSet.id} onClick={() => navigate(`/expected/${questionSet.id}`)}>
              <S.QuestionSetTitle>{questionSet.title}</S.QuestionSetTitle>
            </S.QuestionSetCard>
          ))}
        </S.QuestionSetListContainer>
      </S.Main>
    </S.Container>
  );
}

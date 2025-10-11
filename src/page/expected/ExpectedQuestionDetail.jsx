
import React from "react";
import * as S from "./styles";
import { useParams } from "react-router-dom";
import expectedQuestions from "@/data/expectedQuestions";

export default function ExpectedQuestionDetail() {
  const { id } = useParams();
  const questionSet = expectedQuestions.find((qs) => qs.id === parseInt(id));

  if (!questionSet) {
    return <div>예상 질문 리스트를 찾을 수 없습니다.</div>;
  }

  return (
    <S.Container>
      <S.Main>
        <S.Title>{questionSet.title}</S.Title>
        <S.QuestionSetListContainer>
          {questionSet.questions.map((question, index) => (
            <S.QuestionSetCard key={index}>
              <S.QuestionSetTitle>{question}</S.QuestionSetTitle>
            </S.QuestionSetCard>
          ))}
        </S.QuestionSetListContainer>
      </S.Main>
    </S.Container>
  );
}

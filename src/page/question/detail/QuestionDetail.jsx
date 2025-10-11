
import React from "react";
import * as S from "./styles";
import { useParams } from "react-router-dom";
import questions from "@/data/question";

export default function QuestionDetail() {
  const { id } = useParams();
  const question = questions.find((q) => q.id === parseInt(id));

  if (!question) {
    return <div>질문을 찾을 수 없습니다.</div>;
  }

  return (
    <S.Container>
      <S.Main>
        <S.QuestionContainer>
          <S.Title>{question.question}</S.Title>
          <S.MetaInfo>
            <S.MetaItem>회사: {question.company}</S.MetaItem>
            <S.MetaItem>분야: {question.category}</S.MetaItem>
            <S.MetaItem>세부 분야: {question.field}</S.MetaItem>
          </S.MetaInfo>
          <S.Content>이곳에 질문에 대한 상세 내용이 표시됩니다.</S.Content>
        </S.QuestionContainer>
      </S.Main>
    </S.Container>
  );
}

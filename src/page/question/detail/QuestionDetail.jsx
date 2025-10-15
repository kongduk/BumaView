import React from "react";
import * as S from "./styles";
import { useParams } from "react-router-dom";
import { useQuestionDetails } from "@/lib/question/question";

export default function QuestionDetail() {
  const { id } = useParams();
  const { data: question, isLoading, isError, error } = useQuestionDetails(id);

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
        <S.QuestionContainer>
          <S.Title>{question.question_text}</S.Title>
          <S.MetaInfo>
            <S.MetaItem>회사 ID: {question.company_id}</S.MetaItem>
            <S.MetaItem>분야: {question.occupation_id}</S.MetaItem>
            <S.MetaItem>난이도: {question.difficulty}</S.MetaItem>
          </S.MetaInfo>
          <S.Content>모범답안: {question.model_answer}</S.Content>
        </S.QuestionContainer>
      </S.Main>
    </S.Container>
  );
}
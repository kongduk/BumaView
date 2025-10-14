
import React from "react";
import * as S from "./styles";
import { useParams } from "react-router-dom";
import { useGetCompany } from "@/lib/hooks/useCompany";
import questions from "@/data/question"; // 이 부분은 질문 API가 구현되면 변경해야 합니다.

export default function CompanyDetail() {
  const { id } = useParams();
  const { data: company, isLoading, error } = useGetCompany(Number(id));

  // TODO: 질문 데이터도 API를 통해 가져오도록 수정해야 합니다.
  const companyQuestions = questions.filter((q) => q.company === company?.name);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: {error.message}</div>;
  if (!company) {
    return <div>회사를 찾을 수 없습니다.</div>;
  }

  return (
    <S.Container>
      <S.Main>
        <S.Title>{company.name}</S.Title>
        <S.Description>{company.description}</S.Description>
        <S.QuestionListContainer>
          {companyQuestions.map((question) => (
            <S.QuestionCard key={question.id}>
              <S.QuestionText>{question.question}</S.QuestionText>
            </S.QuestionCard>
          ))}
        </S.QuestionListContainer>
      </S.Main>
    </S.Container>
  );
}

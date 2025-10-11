
import React from "react";
import * as S from "./styles";
import { useParams, useNavigate } from "react-router-dom";
import companies from "@/data/companies";
import questions from "@/data/question";

export default function CompanyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const company = companies.find((c) => c.id === parseInt(id));
  const companyQuestions = questions.filter((q) => q.company === company?.name);

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

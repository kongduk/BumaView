
import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import companies from "@/data/companies";

export default function CompanyList() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Main>
        <S.Title>회사 전체 조회</S.Title>
        <S.AddButton onClick={() => navigate("/company/new")}>회사 추가</S.AddButton>
        <S.CompanyListContainer>
          {companies.map((company) => (
            <S.CompanyCard key={company.id} onClick={() => navigate(`/company/${company.id}`)}>
              <S.CompanyName>{company.name}</S.CompanyName>
            </S.CompanyCard>
          ))}
        </S.CompanyListContainer>
      </S.Main>
    </S.Container>
  );
}

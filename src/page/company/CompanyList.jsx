
import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useGetCompanies, useDeleteCompany } from "@/lib/hooks/useCompany";

export default function CompanyList() {
  const navigate = useNavigate();
  const { data: companies, isLoading, error } = useGetCompanies();
  const deleteCompanyMutation = useDeleteCompany();

  const handleDelete = (e, id) => {
    e.stopPropagation();
    deleteCompanyMutation.mutate(id);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <S.Container>
      <S.Main>
        <S.Title>회사 전체 조회</S.Title>
        <S.AddButton onClick={() => navigate("/company/new")}>회사 추가</S.AddButton>
        <S.CompanyListContainer>
          {companies?.map((company) => (
            <S.CompanyCard key={company.id} onClick={() => navigate(`/company/${company.id}`)}>
              <S.CompanyName>{company.name}</S.CompanyName>
              <S.DeleteButton onClick={(e) => handleDelete(e, company.id)}>삭제</S.DeleteButton>
            </S.CompanyCard>
          ))}
        </S.CompanyListContainer>
      </S.Main>
    </S.Container>
  );
}

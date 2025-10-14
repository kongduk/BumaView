
import React, { useState } from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useCreateCompany } from "@/lib/hooks/useCompany";

export default function NewCompany() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const createCompanyMutation = useCreateCompany();

  const handleSubmit = (e) => {
    e.preventDefault();
    createCompanyMutation.mutate(
      { name, description },
      {
        onSuccess: () => {
          navigate("/company");
        },
      }
    );
  };

  return (
    <S.Container>
      <S.Main>
        <S.Title>새 회사 추가</S.Title>
        <form onSubmit={handleSubmit}>
          <S.CompanyForm>
            <S.FormGroup>
              <S.Label htmlFor="companyName">회사 이름</S.Label>
              <S.Input
                type="text"
                id="companyName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </S.FormGroup>
            <S.FormGroup>
              <S.Label htmlFor="description">회사 설명</S.Label>
              <S.Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </S.FormGroup>
          </S.CompanyForm>
          <S.SubmitButton type="submit">회사 등록</S.SubmitButton>
        </form>
      </S.Main>
    </S.Container>
  );
}

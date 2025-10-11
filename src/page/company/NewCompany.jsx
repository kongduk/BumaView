
import React, { useState } from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export default function NewCompany() {
  const [companies, setCompanies] = useState([{ name: "", description: "" }]);
  const navigate = useNavigate();

  const handleAddCompany = () => {
    setCompanies([...companies, { name: "", description: "" }]);
  };

  const handleCompanyChange = (index, field, value) => {
    const newCompanies = [...companies];
    newCompanies[index][field] = value;
    setCompanies(newCompanies);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save the new companies
    console.log(companies);
    navigate("/company");
  };

  return (
    <S.Container>
      <S.Main>
        <S.Title>새 회사 추가</S.Title>
        <form onSubmit={handleSubmit}>
          {companies.map((company, index) => (
            <S.CompanyForm key={index}>
              <S.FormGroup>
                <S.Label htmlFor={`companyName-${index}`}>회사 이름</S.Label>
                <S.Input
                  type="text"
                  id={`companyName-${index}`}
                  value={company.name}
                  onChange={(e) => handleCompanyChange(index, "name", e.target.value)}
                  required
                />
              </S.FormGroup>
              <S.FormGroup>
                <S.Label htmlFor={`description-${index}`}>회사 설명</S.Label>
                <S.Textarea
                  id={`description-${index}`}
                  value={company.description}
                  onChange={(e) => handleCompanyChange(index, "description", e.target.value)}
                  required
                />
              </S.FormGroup>
              {index > 0 && (
                <S.DeleteButton type="button" onClick={() => {
                  const newCompanies = [...companies];
                  newCompanies.splice(index, 1);
                  setCompanies(newCompanies);
                }}>
                  삭제
                </S.DeleteButton>
              )}
            </S.CompanyForm>
          ))}
          <S.AddCompanyButton type="button" onClick={handleAddCompany}>회사 추가하기</S.AddCompanyButton>
          <S.SubmitButton type="submit">모든 회사 등록</S.SubmitButton>
        </form>
      </S.Main>
    </S.Container>
  );
}

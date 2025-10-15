import React, { useState } from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useAddResume } from "@/lib/hooks/useResume";

export default function NewResume() {
  const [companyId, setCompanyId] = useState("");
  const [occupationId, setOccupationId] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const addResumeMutation = useAddResume();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("company_id", companyId);
    formData.append("occupation_id", occupationId);
    formData.append("file", file);
    // Assuming user_id is 1 for now
    formData.append("user_id", 1);

    addResumeMutation.mutate(formData, {
      onSuccess: () => {
        navigate("/resume/my");
      },
    });
  };

  return (
    <S.Container>
      <S.Main>
        <S.Title>새 자소서 작성</S.Title>
        <form onSubmit={handleSubmit}>
          <S.FormGroup>
            <S.Label htmlFor="companyId">회사 ID</S.Label>
            <S.Input
              type="number"
              id="companyId"
              value={companyId}
              onChange={(e) => setCompanyId(e.target.value)}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="occupationId">직군 ID</S.Label>
            <S.Input
              type="text"
              id="occupationId"
              value={occupationId}
              onChange={(e) => setOccupationId(e.target.value)}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="file">자기소개서 파일</S.Label>
            <S.Input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              required
            />
          </S.FormGroup>
          <S.SubmitButton type="submit" disabled={addResumeMutation.isLoading}>
            {addResumeMutation.isLoading ? '저장 중...' : '저장'}
          </S.SubmitButton>
        </form>
      </S.Main>
    </S.Container>
  );
}
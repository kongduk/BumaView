import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useResumeDetails, useUpdateResume } from "@/lib/hooks/useResume";

export default function EditResume() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: initialResume, isLoading, isError, error } = useResumeDetails(id);
  const updateMutation = useUpdateResume();

  const [resume, setResume] = useState(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (initialResume) {
      setResume(initialResume);
    }
  }, [initialResume]);

  const handleChange = (field, value) => {
    setResume({ ...resume, [field]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("company_id", resume.company_id);
    formData.append("occupation_id", resume.occupation_id);
    if (file) {
      formData.append("file", file);
    }

    updateMutation.mutate({ id, ...formData }, {
      onSuccess: () => {
        navigate(`/resume/${id}`);
      },
    });
  };

  if (isLoading) {
    return <S.Container><S.Main><div>자기소개서를 불러오는 중입니다...</div></S.Main></S.Container>;
  }

  if (isError) {
    return <S.Container><S.Main><div>자기소개서를 불러오는데 오류가 발생했습니다: {error.message}</div></S.Main></S.Container>;
  }

  if (!resume) {
    return <S.Container><S.Main><div>자소서를 찾을 수 없습니다.</div></S.Main></S.Container>;
  }

  return (
    <S.Container>
      <S.Main>
        <S.Title>자소서 수정</S.Title>
        <form onSubmit={handleSubmit}>
          <S.FormGroup>
            <S.Label htmlFor="companyId">회사 ID</S.Label>
            <S.Input
              type="number"
              id="companyId"
              value={resume.company_id}
              onChange={(e) => handleChange("company_id", e.target.value)}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="occupationId">직군 ID</S.Label>
            <S.Input
              type="text"
              id="occupationId"
              value={resume.occupation_id}
              onChange={(e) => handleChange("occupation_id", e.target.value)}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="file">자기소개서 파일 (변경 시에만 선택)</S.Label>
            <S.Input
              type="file"
              id="file"
              onChange={handleFileChange}
            />
          </S.FormGroup>
          <S.SubmitButton type="submit" disabled={updateMutation.isLoading}>
            {updateMutation.isLoading ? '수정 중...' : '수정 완료'}
          </S.SubmitButton>
        </form>
      </S.Main>
    </S.Container>
  );
}
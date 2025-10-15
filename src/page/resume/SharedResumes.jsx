import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useResumes } from "@/lib/hooks/useResume";

export default function SharedResumes() {
  const navigate = useNavigate();
  const { data: resumes, isLoading, isError, error } = useResumes();

  if (isLoading) {
    return <S.Container><S.Main><div>자기소개서 목록을 불러오는 중입니다...</div></S.Main></S.Container>;
  }

  if (isError) {
    return <S.Container><S.Main><div>자기소개서 목록을 불러오는데 오류가 발생했습니다: {error.message}</div></S.Main></S.Container>;
  }

  const sharedResumes = resumes ? resumes.filter(r => r.is_shared) : [];

  return (
    <S.Container>
      <S.Main>
        <S.Title>공유 자소서</S.Title>
        <S.ResumeListContainer>
          {sharedResumes.map((resume) => (
            <S.ResumeCard key={resume.application_id} onClick={() => navigate(`/resume/shared/${resume.application_id}`)}>
              <S.ResumeTitle>{resume.original_file_name}</S.ResumeTitle>
            </S.ResumeCard>
          ))}
        </S.ResumeListContainer>
      </S.Main>
    </S.Container>
  );
}
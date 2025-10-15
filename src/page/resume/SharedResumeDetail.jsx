import React from "react";
import * as S from "./styles";
import { useParams } from "react-router-dom";
import { useResumeDetails } from "@/lib/hooks/useResume";

export default function SharedResumeDetail() {
  const { id } = useParams();
  const { data: resume, isLoading, isError, error } = useResumeDetails(id);

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
        <S.Title>{resume.original_file_name}</S.Title>
        <S.ContentContainer>
          <p>회사 ID: {resume.company_id}</p>
          <p>직군 ID: {resume.occupation_id}</p>
          <p>생성일: {new Date(resume.created_at).toLocaleDateString()}</p>
          <S.Content>파일 경로: {resume.path}</S.Content>
        </S.ContentContainer>
      </S.Main>
    </S.Container>
  );
}
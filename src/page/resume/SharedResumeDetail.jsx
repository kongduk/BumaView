
import React from "react";
import * as S from "./styles";
import { useParams } from "react-router-dom";

export default function SharedResumeDetail({ resumes }) {
  const { id } = useParams();
  console.log("Resumes in SharedResumeDetail:", resumes);
  console.log("ID in SharedResumeDetail:", id);
  const resume = resumes.find((r) => r.id === parseInt(id));

  console.log("Found resume:", resume);

  if (!resume) {
    return <div>자소서를 찾을 수 없습니다.</div>;
  }

  return (
    <S.Container>
      <S.Main>
        <S.Title>{resume.title}</S.Title>
        <S.ContentContainer>
          <S.Content>{resume.content}</S.Content>
        </S.ContentContainer>
      </S.Main>
    </S.Container>
  );
}

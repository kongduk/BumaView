
import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export default function SharedResumes({ resumes }) {
  const navigate = useNavigate();
  const sharedResumes = resumes.filter(r => r.isShared);

  return (
    <S.Container>
      <S.Main>
        <S.Title>공유 자소서</S.Title>
        <S.ResumeListContainer>
          {sharedResumes.map((resume) => (
            <S.ResumeCard key={resume.id} onClick={() => navigate(`/resume/shared/${resume.id}`)}>
              <S.ResumeTitle>{resume.title}</S.ResumeTitle>
            </S.ResumeCard>
          ))}
        </S.ResumeListContainer>
      </S.Main>
    </S.Container>
  );
}

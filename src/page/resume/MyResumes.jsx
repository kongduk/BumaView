
import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export default function MyResumes({ resumes, handleDeleteResume }) {
  const navigate = useNavigate();
  const myResumes = resumes.filter(r => !r.isShared);

  return (
    <S.Container>
      <S.Main>
        <S.Title>내 자소서</S.Title>
        <S.AddButton onClick={() => navigate("/resume/new")}>자소서 추가</S.AddButton>
        <S.ResumeListContainer>
          {myResumes.map((resume) => (
            <S.ResumeCard key={resume.id} onClick={() => navigate(`/resume/${resume.id}`)}>
              <S.ResumeTitle>{resume.title}</S.ResumeTitle>
              <S.ButtonContainer>
                <S.Button onClick={(e) => { e.stopPropagation(); alert("공유되었습니다."); }}>공유</S.Button>
                <S.Button onClick={(e) => { e.stopPropagation(); navigate(`/resume/edit/${resume.id}`); }}>수정</S.Button>
                <S.Button onClick={(e) => { e.stopPropagation(); handleDeleteResume(resume.id); }}>삭제</S.Button>
              </S.ButtonContainer>
            </S.ResumeCard>
          ))}
        </S.ResumeListContainer>
      </S.Main>
    </S.Container>
  );
}

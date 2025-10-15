import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useMyResumes, useDeleteResume, useUpdateResume } from "@/lib/resume/resumeApi";

export default function MyResumes() {
  const navigate = useNavigate();
  const myUserId = 1; // Assuming a static user ID for now
  const { data: myResumes, isLoading, isError, error } = useMyResumes(myUserId);
  const deleteMutation = useDeleteResume();
  const updateMutation = useUpdateResume();

  const handleDeleteResume = (id) => {
    if (window.confirm("정말로 이 자기소개서를 삭제하시겠습니까?")) {
      deleteMutation.mutate(id);
    }
  };

  const handleShareResume = (resume) => {
    updateMutation.mutate({ ...resume, id: resume.application_id, is_shared: !resume.is_shared }, {
        onSuccess: () => {
            alert(resume.is_shared ? "공유가 취소되었습니다." : "공유되었습니다.");
        }
    });
  };

  if (isLoading) {
    return <S.Container><S.Main><div>자기소개서 목록을 불러오는 중입니다...</div></S.Main></S.Container>;
  }

  if (isError) {
    return <S.Container><S.Main><div>자기소개서 목록을 불러오는데 오류가 발생했습니다: {error.message}</div></S.Main></S.Container>;
  }

  return (
    <S.Container>
      <S.Main>
        <S.Title>내 자소서</S.Title>
        <S.AddButton onClick={() => navigate("/resume/new")}>자소서 추가</S.AddButton>
        <S.ResumeListContainer>
          {myResumes && myResumes.map((resume) => (
            <S.ResumeCard key={resume.application_id} onClick={() => navigate(`/resume/${resume.application_id}`)}>
              <S.ResumeTitle>{resume.original_file_name}</S.ResumeTitle>
              <S.ButtonContainer>
                <S.Button onClick={(e) => { e.stopPropagation(); handleShareResume(resume); }}>{resume.is_shared ? "공유 취소" : "공유"}</S.Button>
                <S.Button onClick={(e) => { e.stopPropagation(); navigate(`/resume/edit/${resume.application_id}`); }}>수정</S.Button>
                <S.Button onClick={(e) => { e.stopPropagation(); handleDeleteResume(resume.application_id); }}>삭제</S.Button>
              </S.ButtonContainer>
            </S.ResumeCard>
          ))}
        </S.ResumeListContainer>
      </S.Main>
    </S.Container>
  );
}
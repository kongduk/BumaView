
import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { useNavigate, useParams } from "react-router-dom";

export default function EditResume({ resumes, handleUpdateResume }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [resume, setResume] = useState(null);

  useEffect(() => {
    const r = resumes.find((r) => r.id === parseInt(id));
    if (r) {
      setResume(r);
    } else {
      navigate("/resume/my");
    }
  }, [id, navigate, resumes]);

  const handleChange = (field, value) => {
    setResume({ ...resume, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateResume(resume);
    navigate("/resume/my");
  };

  if (!resume) {
    return <div>로딩중...</div>;
  }

  return (
    <S.Container>
      <S.Main>
        <S.Title>자소서 수정</S.Title>
        <form onSubmit={handleSubmit}>
          <S.FormGroup>
            <S.Label htmlFor="title">제목</S.Label>
            <S.Input
              type="text"
              id="title"
              value={resume.title}
              onChange={(e) => handleChange("title", e.target.value)}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="content">내용</S.Label>
            <S.Textarea
              id="content"
              value={resume.content}
              onChange={(e) => handleChange("content", e.target.value)}
              required
            />
          </S.FormGroup>
          <S.SubmitButton type="submit">수정 완료</S.SubmitButton>
        </form>
      </S.Main>
    </S.Container>
  );
}

import React, { useState } from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export default function NewResume({ handleAddResume }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddResume({ title, content, isShared: false });
    navigate("/resume/my");
  };

  return (
    <S.Container>
      <S.Main>
        <S.Title>새 자소서 작성</S.Title>
        <form onSubmit={handleSubmit}>
          <S.FormGroup>
            <S.Label htmlFor="title">제목</S.Label>
            <S.Input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="content">내용</S.Label>
            <S.Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </S.FormGroup>
          <S.SubmitButton type="submit">저장</S.SubmitButton>
        </form>
      </S.Main>
    </S.Container>
  );
}

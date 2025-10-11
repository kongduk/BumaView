
import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export default function NewInterview() {
  const navigate = useNavigate();
  const fields = ["Web", "Ai", "Security", "Embedded", "Game"];

  return (
    <S.Container>
      <S.Main>
        <S.Title>분야 선택</S.Title>
        <S.FieldSelectionContainer>
          {fields.map((field) => (
            <S.FieldCard key={field} onClick={() => navigate(`/interview/field/${field}`)}>
              <S.FieldName>{field}</S.FieldName>
            </S.FieldCard>
          ))}
        </S.FieldSelectionContainer>
      </S.Main>
    </S.Container>
  );
}

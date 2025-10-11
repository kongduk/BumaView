
import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import mockInterviews from "@/data/mockInterviews";

export default function MyInterview() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Main>
        <S.Title>내가 본 모의 면접</S.Title>
        <S.InterviewListContainer>
          {mockInterviews.map((interview) => (
            <S.InterviewCard key={interview.id} onClick={() => alert(`면접 결과 상세 보기: ${interview.title}`)}>
              <S.InterviewTitle>{interview.title}</S.InterviewTitle>
              <S.InterviewMeta>{interview.date} - {interview.score}</S.InterviewMeta>
            </S.InterviewCard>
          ))}
        </S.InterviewListContainer>
      </S.Main>
    </S.Container>
  );
}

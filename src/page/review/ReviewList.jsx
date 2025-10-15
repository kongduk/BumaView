import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useReviews } from "@/lib/hooks/useReview";
import * as S from "./styles";

export default function ReviewList() {
  const { questionId } = useParams();
  const navigate = useNavigate();
  const { data: reviews, isLoading, isError, error } = useReviews();

  if (isLoading) {
    return <S.Container><S.Main><div>리뷰 목록을 불러오는 중입니다...</div></S.Main></S.Container>;
  }

  if (isError) {
    return <S.Container><S.Main><div>리뷰 목록을 불러오는데 오류가 발생했습니다: {error.message}</div></S.Main></S.Container>;
  }

  const filteredReviews = reviews ? reviews.filter(r => r.question_id === parseInt(questionId)) : [];

  return (
    <S.Container>
      <S.Main>
        <S.Title>리뷰 목록</S.Title>
        <S.AddButton onClick={() => navigate(`/review/new/${questionId}`)}>리뷰 작성</S.AddButton>
        <S.ReviewListContainer>
          {filteredReviews.map((review) => (
            <S.ReviewCard key={review.review_id} onClick={() => navigate(`/review/${review.review_id}`)}>
              <S.ReviewText>{review.review_text}</S.ReviewText>
              <S.Rating>평점: {review.rating}</S.Rating>
            </S.ReviewCard>
          ))}
        </S.ReviewListContainer>
      </S.Main>
    </S.Container>
  );
}

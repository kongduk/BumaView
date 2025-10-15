import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useReviewDetails } from "@/lib/hooks/useReview";
import * as S from "./styles";

export default function ReviewDetail() {
  const { reviewId } = useParams();
  const navigate = useNavigate();
  const { data: review, isLoading, isError, error } = useReviewDetails(reviewId);

  if (isLoading) {
    return <S.Container><S.Main><div>리뷰를 불러오는 중입니다...</div></S.Main></S.Container>;
  }

  if (isError) {
    return <S.Container><S.Main><div>리뷰를 불러오는데 오류가 발생했습니다: {error.message}</div></S.Main></S.Container>;
  }

  if (!review) {
    return <S.Container><S.Main><div>리뷰를 찾을 수 없습니다.</div></S.Main></S.Container>;
  }

  return (
    <S.Container>
      <S.Main>
        <S.Title>리뷰 상세</S.Title>
        <S.ReviewContainer>
            <S.ReviewText>{review.review_text}</S.ReviewText>
            <S.Rating>평점: {review.rating}</S.Rating>
            <S.EditButton onClick={() => navigate(`/review/edit/${review.review_id}`)}>수정</S.EditButton>
        </S.ReviewContainer>
      </S.Main>
    </S.Container>
  );
}

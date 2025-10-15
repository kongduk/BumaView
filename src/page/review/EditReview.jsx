import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useReviewDetails, useUpdateReview } from "@/lib/hooks/useReview";
import * as S from "./styles";

export default function EditReview() {
  const { reviewId } = useParams();
  const navigate = useNavigate();
  const { data: initialReview, isLoading, isError, error } = useReviewDetails(reviewId);
  const updateMutation = useUpdateReview();

  const [review, setReview] = useState(null);

  useEffect(() => {
    if (initialReview) {
      setReview(initialReview);
    }
  }, [initialReview]);

  const handleChange = (field, value) => {
    setReview({ ...review, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMutation.mutate({ id: review.review_id, review_text: review.review_text, rating: review.rating }, {
      onSuccess: () => {
        navigate(`/review/${review.review_id}`);
      },
    });
  };

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
        <S.Title>리뷰 수정</S.Title>
        <form onSubmit={handleSubmit}>
          <S.FormGroup>
            <S.Label htmlFor="reviewText">리뷰 내용</S.Label>
            <S.Textarea
              id="reviewText"
              value={review.review_text}
              onChange={(e) => handleChange("review_text", e.target.value)}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="rating">평점</S.Label>
            <S.Input
              type="number"
              id="rating"
              value={review.rating}
              onChange={(e) => handleChange("rating", parseInt(e.target.value))}
              min="0"
              max="5"
              required
            />
          </S.FormGroup>
          <S.SubmitButton type="submit" disabled={updateMutation.isLoading}>
            {updateMutation.isLoading ? '수정 중...' : '수정 완료'}
          </S.SubmitButton>
        </form>
      </S.Main>
    </S.Container>
  );
}

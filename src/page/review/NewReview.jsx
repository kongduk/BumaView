import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAddReview } from "@/lib/hooks/useReview";
import * as S from "./styles";

export default function NewReview() {
  const { questionId } = useParams();
  const navigate = useNavigate();
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const addReviewMutation = useAddReview();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting review:", { questionId, reviewText, rating });
    const userId = 1;
    addReviewMutation.mutate({ question_id: parseInt(questionId), user_id: userId, review_text: reviewText, rating }, {
      onSuccess: () => {
        navigate(`/review/list/${questionId}`);
      },
    });
  };

  return (
    <S.Container>
      <S.Main>
        <S.Title>리뷰 작성</S.Title>
        <form onSubmit={handleSubmit}>
          <S.FormGroup>
            <S.Label htmlFor="reviewText">리뷰 내용</S.Label>
            <S.Textarea
              id="reviewText"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="rating">평점</S.Label>
            <S.Input
              type="number"
              id="rating"
              value={rating}
              onChange={(e) => setRating(parseInt(e.target.value))}
              min="0"
              max="5"
              required
            />
          </S.FormGroup>
          <S.SubmitButton type="submit" disabled={addReviewMutation.isLoading}>
            {addReviewMutation.isLoading ? '작성 중...' : '작성 완료'}
          </S.SubmitButton>
        </form>
      </S.Main>
    </S.Container>
  );
}

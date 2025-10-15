import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchReviews, fetchReviewDetails, addReview, updateReview } from '../review/review';

export const useReviews = () => {
  return useQuery({
    queryKey: ['reviews'],
    queryFn: fetchReviews,
  });
};

export const useReviewDetails = (id) => {
  return useQuery({
    queryKey: ['review', id],
    queryFn: () => fetchReviewDetails(id),
    enabled: !!id,
  });
};

export const useAddReview = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
    },
  });
};

export const useUpdateReview = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateReview,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
      queryClient.invalidateQueries({ queryKey: ['review', variables.id] });
    },
  });
};

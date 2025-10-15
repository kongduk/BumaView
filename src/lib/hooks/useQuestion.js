import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchQuestions, fetchQuestionDetails, addQuestion, updateQuestion, deleteQuestion } from '../question/question';

export const useQuestions = () => {
  return useQuery({
    queryKey: ['questions'],
    queryFn: fetchQuestions,
  });
};

export const useQuestionDetails = (id) => {
  return useQuery({
    queryKey: ['question', id],
    queryFn: () => fetchQuestionDetails(id),
    enabled: !!id,
  });
};

export const useAddQuestion = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addQuestion,
    onSuccess: (newQuestion) => {
      console.log("useAddQuestion onSuccess: newQuestion", newQuestion);
      queryClient.setQueryData(['questions'], (oldQuestions) => {
        console.log("useAddQuestion onSuccess: oldQuestions from cache", oldQuestions);
        const updatedQuestions = oldQuestions ? [...oldQuestions, newQuestion] : [newQuestion];
        console.log("useAddQuestion onSuccess: updatedQuestions for cache", updatedQuestions);
        return updatedQuestions;
      });
    },
  });
};

export const useUpdateQuestion = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateQuestion,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['questions'] });
      queryClient.invalidateQueries({ queryKey: ['question', variables.id] });
    },
  });
};

export const useDeleteQuestion = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteQuestion,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['questions'] });
    },
  });
};

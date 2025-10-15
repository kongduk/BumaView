import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchResumes, fetchResumeDetails, fetchMyResumes, addResume, updateResume, deleteResume } from '../resume';

export const useResumes = () => {
  return useQuery({
    queryKey: ['resumes'],
    queryFn: fetchResumes,
  });
};

export const useResumeDetails = (id) => {
  return useQuery({
    queryKey: ['resume', id],
    queryFn: () => fetchResumeDetails(id),
    enabled: !!id,
  });
};

export const useMyResumes = (userId) => {
    return useQuery({
        queryKey: ['myResumes', userId],
        queryFn: () => fetchMyResumes(userId),
        enabled: !!userId,
    });
};

export const useAddResume = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addResume,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['resumes'] });
      queryClient.invalidateQueries({ queryKey: ['myResumes'] });
    },
  });
};

export const useUpdateResume = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateResume,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['resumes'] });
      queryClient.invalidateQueries({ queryKey: ['myResumes'] });
      queryClient.invalidateQueries({ queryKey: ['resume', variables.id] });
    },
  });
};

export const useDeleteResume = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteResume,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['resumes'] });
      queryClient.invalidateQueries({ queryKey: ['myResumes'] });
    },
  });
};

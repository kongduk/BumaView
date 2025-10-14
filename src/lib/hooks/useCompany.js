import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getCompanies, getCompanyById, createCompany, deleteCompany } from '../companyApi';

const companyKeys = {
  all: ['companies'],
  lists: () => [...companyKeys.all, 'list'],
  list: (filters) => [...companyKeys.lists(), { filters }],
  details: () => [...companyKeys.all, 'detail'],
  detail: (id) => [...companyKeys.details(), id],
}

export const useGetCompanies = () => {
  return useQuery({
    queryKey: companyKeys.lists(),
    queryFn: getCompanies,
  });
};

export const useGetCompany = (id) => {
  return useQuery({
    queryKey: companyKeys.detail(id),
    queryFn: () => getCompanyById(id),
    enabled: !!id,
  });
};

export const useCreateCompany = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (company) => createCompany(company),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: companyKeys.lists() });
    },
  });
};

export const useDeleteCompany = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteCompany(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: companyKeys.lists() });
    },
  });
};
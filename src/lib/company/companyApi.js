import Customapi from '../api';
import '../../data/types.js';

export const getCompanies = async () => {
  const response = await Customapi.get('/company');
  return response.data;
};

export const getCompanyById = async (id) => {
  const response = await Customapi.get(`/company/${id}`);
  return response.data;
};

export const createCompany = async (company) => {
  const response = await Customapi.post('/company', company);
  return response.data;
};

export const deleteCompany = async (id) => {
  await Customapi.delete(`/company/${id}`);
};
import Customapi from './api';
import './../data/types.js';

/**
 * @returns {Promise<Company[]>}
 */
export const getCompanies = async () => {
  const response = await Customapi.get('/company');
  return response.data;
};

/**
 * @param {number} id
 * @returns {Promise<Company>}
 */
export const getCompanyById = async (id) => {
  const response = await Customapi.get(`/company/${id}`);
  return response.data;
};

/**
 * @param {CompanyCreate} company
 * @returns {Promise<Company>}
 */
export const createCompany = async (company) => {
  const response = await Customapi.post('/company', company);
  return response.data;
};

/**
 * @param {number} id
 * @returns {Promise<void>}
 */
export const deleteCompany = async (id) => {
  await Customapi.delete(`/company/${id}`);
};
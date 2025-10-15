import Customapi from '../api';
import '../../data/types.js';

const dummyCompanies = [
    {
      id: 1,
      name: "니더",
      description: "IT 솔루션 개발 및 공급",
      person: { name: "김철수", role: "프론트엔드 개발자" },
    },
    {
      id: 2,
      name: "(주)유클리드소프트",
      description: "소프트웨어 개발 및 컨설팅",
      person: { name: "이영희", role: "백엔드 개발자" },
    },
    {
      id: 3,
      name: "(주)아이티",
      description: "정보 기술 서비스 제공",
      person: { name: "박민수", role: "풀스택 개발자" },
    },
    {
      id: 4,
      name: "(주)에이블",
      description: "AI 기반 솔루션 개발",
      person: { name: "최지영", role: "AI 엔지니어" },
    },
    {
      id: 5,
      name: "(주)에스에스솔루션",
      description: "보안 솔루션 전문 기업",
      person: { name: "정현우", role: "보안 엔지니어" },
    },
  ];

export const getCompanies = async () => {
  try {
    const response = await Customapi.get('/company');
    return response.data;
  } catch (error) {
    console.error("Error fetching companies from API, returning dummy data:", error);
    return dummyCompanies;
  }
};

export const getCompanyById = async (id) => {
  try {
    const response = await Customapi.get(`/company/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching company with id ${id} from API, returning dummy data:`, error);
    return dummyCompanies.find(c => c.id === parseInt(id));
  }
};

export const createCompany = async (company) => {
  const response = await Customapi.post('/company', company);
  return response.data;
};

export const deleteCompany = async (id) => {
  await Customapi.delete(`/company/${id}`);
};

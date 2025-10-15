import Customapi from "@/lib/api";

// Helper functions for localStorage
const getStoredQuestions = () => {
  const storedQuestions = localStorage.getItem('questions');
  return storedQuestions ? JSON.parse(storedQuestions) : [];
};

const setStoredQuestions = (questions) => {
  localStorage.setItem('questions', JSON.stringify(questions));
};

// Initial Dummy Data for testing
const initialDummyQuestions = [
  {
    question_id: 1,
    company_id: 101,
    occupation_id: "Web",
    author_id: 1,
    question_text: "프론트엔드 개발자로서 가장 중요하다고 생각하는 역량은 무엇인가요?",
    model_answer: "사용자 경험을 최우선으로 생각하는 능력과 지속적인 학습 능력입니다.",
    difficulty: "상",
    model_config: { from_attributes: true }
  },
  {
    question_id: 2,
    company_id: 102,
    occupation_id: "Ai",
    author_id: 2,
    question_text: "AI 모델 학습 시 오버피팅을 방지하는 방법에 대해 설명해주세요.",
    model_answer: "드롭아웃, 조기 종료, 데이터 증강 등의 기법을 사용할 수 있습니다.",
    difficulty: "중",
    model_config: { from_attributes: true }
  },
  {
    question_id: 3,
    company_id: 103,
    occupation_id: "Security",
    author_id: 3,
    question_text: "웹 애플리케이션 보안에서 XSS 공격을 방어하는 방법에 대해 아는 대로 말해주세요.",
    model_answer: "입력 값 검증, 출력 인코딩, CSP 설정 등을 통해 방어할 수 있습니다.",
    difficulty: "하",
    model_config: { from_attributes: true }
  },
  {
    question_id: 4,
    company_id: 101,
    occupation_id: "Web",
    author_id: 1,
    question_text: "React에서 상태 관리를 위해 어떤 라이브러리를 사용해 보셨나요?",
    model_answer: "Redux, Recoil, Zustand 등을 사용해 보았습니다.",
    difficulty: "중",
    model_config: { from_attributes: true }
  },
  {
    question_id: 5,
    company_id: 102,
    occupation_id: "Embedded",
    author_id: 4,
    question_text: "임베디드 시스템에서 실시간 운영체제(RTOS)의 역할은 무엇인가요?",
    model_answer: "정해진 시간 안에 작업을 처리할 수 있도록 스케줄링 및 자원 관리를 담당합니다.",
    difficulty: "상",
    model_config: { from_attributes: true }
  },
];

// Initialize localStorage with dummy data if empty
if (getStoredQuestions().length === 0) {
  setStoredQuestions(initialDummyQuestions);
}

// API Functions
export const fetchQuestions = async () => {
  return getStoredQuestions();
};

export const fetchQuestionDetails = async (id) => {
  const storedQuestions = getStoredQuestions();
  return storedQuestions.find(q => q.question_id === parseInt(id)) || null;
};

export const addQuestion = async (newQuestion) => {
  const storedQuestions = getStoredQuestions();
  const newId = Math.max(...storedQuestions.map(q => q.question_id), 0) + 1;
  const questionToAdd = { ...newQuestion, question_id: newId };
  const updatedQuestions = [...storedQuestions, questionToAdd];
  setStoredQuestions(updatedQuestions);
  return questionToAdd;
};

export const deleteQuestion = async (id) => {
  let storedQuestions = getStoredQuestions();
  const updatedQuestions = storedQuestions.filter(q => q.question_id !== parseInt(id));
  setStoredQuestions(updatedQuestions);
  return { success: true }; // Indicate success
};

export const updateQuestion = async ({ id, ...updatedQuestion }) => {
  let storedQuestions = getStoredQuestions();
  const index = storedQuestions.findIndex(q => q.question_id === parseInt(id));
  if (index !== -1) {
    storedQuestions[index] = { ...storedQuestions[index], ...updatedQuestion };
    setStoredQuestions(storedQuestions);
    return storedQuestions[index];
  }
  return null;
};

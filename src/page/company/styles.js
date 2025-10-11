
import styled from '@emotion/styled';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 32px;
`;

export const CompanyListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1200px;
`;

export const CompanyCard = styled.div`
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    border-color: #4facfe;
  }
`;

export const CompanyName = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #444;
  margin-bottom: 8px;
`;

export const AddButton = styled.button`
  background: #4facfe;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 32px;

  &:hover {
    background: #2196f3;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: #555;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
`;

export const SubmitButton = styled.button`
  background: #4facfe;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    background: #2196f3;
  }
`;

export const CompanyForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid #eee;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const AddCompanyButton = styled.button`
  background: #f0f0f0;
  color: #333;
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 16px;

  &:hover {
    background: #e0e0e0;
  }
`;

export const DeleteButton = styled.button`
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-end;

  &:hover {
    background: #cc0000;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 32px;
`;

export const Textarea = styled.textarea`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  min-height: 150px;
  resize: vertical;
`;

export const QuestionListContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const QuestionCard = styled.div`
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  transition: all 0.2s ease;

  &:hover {
    border-color: #4facfe;
    box-shadow: 0 2px 8px rgba(79, 172, 254, 0.1);
  }
`;

export const QuestionText = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: #333;
`;

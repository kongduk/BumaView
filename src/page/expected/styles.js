
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

export const QuestionSetListContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const QuestionSetCard = styled.div`
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  }
`;

export const QuestionSetTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #444;
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
  width: 600px;
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

export const Textarea = styled.textarea`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  min-height: 100px;
  resize: vertical;
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

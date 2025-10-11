
import styled from '@emotion/styled';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

export const Flex = styled.div`
  display: flex;
`;

export const Left = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Right = styled.div`
  width: 300px;
  padding: 0px 60px;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const FormContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const QuestionForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid #eee;
  padding: 16px;
  border-radius: 8px;
`;

export const FormTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 8px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #555;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  background: white;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  min-height: 60px;
  max-height: 100px;
  resize: vertical;
`;

export const AddButton = styled.button`
  background: #f0f0f0;
  color: #333;
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

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

  &:hover {
    background: #2196f3;
  }
`;

export const SidebarContainer = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  margin-top: 60px;
  border: 1px solid #e0e0e0;
  padding: 0px 0px 10px 0px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const SidebarItem = styled.div`
  color: white;
  font-size: 16px;
  padding: 8px 0;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #000000;
  padding: 10px 10px;

  &:hover:not(.active) {
    color: #4facfe;
  }
`;

export const SidebarTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #1e3a8a;
  background: #4facfe;
  padding: 10px;
  border-radius: 10px;
`;

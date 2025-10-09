import styled from '@emotion/styled';

export const Flex = styled.div`
  display: flex;
`;

export const QuestionBox = styled.div`
  display: column
`

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

export const Left = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Right = styled.div`
  width: 300px;
  padding: 0px 60px;
`;
export const QuestionButton = styled.button`
  margin-top: 4rem;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #4facfe;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #2196f3;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(79, 172, 254, 0.3);
  }
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const SearchContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  margin-bottom: 20px;
`;

export const CategoryTabs = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Tab = styled.button`
  padding: 0.75rem 1.5rem;
  border: 2px solid #e1e5e9;
  background: white;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &.active {
    background: #4facfe;
    border-color: #4facfe;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(79, 172, 254, 0.3);
  }

  &:hover:not(.active) {
    border-color: #4facfe;
    color: #4facfe;
    transform: translateY(-1px);
  }
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border: 3px solid #f1f3f4;
  border-radius: 50px;
  padding: 0.1rem;
  transition: all 0.3s ease;

  &:focus-within {
    border-color: #4facfe;
    box-shadow: 0 0 0 4px rgba(79, 172, 254, 0.1);
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  background: transparent;

  &::placeholder {
    color: #9aa0a6;
  }
`;

export const SearchButton = styled.button`
  background: #4facfe;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #2196f3;
    transform: scale(1.05);
  }
`;

export const Item = styled.div`
  padding-left: 20px;
`;

export const QuestionList = styled.div`
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
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  transition: all 0.2s ease;

  &:hover {
    border-color: #4facfe;
    box-shadow: 0 2px 8px rgba(79, 172, 254, 0.1);
  }
`;

export const QuestionContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const QuestionText = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: #333;
`;

export const QuestionRole = styled.div`
  font-size: 14px;
  color: #666;
`;

export const TeacherName = styled.div`
  font-size: 14px;
  color: #666;
  white-space: nowrap;
  margin-left: 16px;
`;

export const MoreButton = styled.button`
  background: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.2s ease;

  &:hover {
    background: #e0e0e0;
    color: #333;
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
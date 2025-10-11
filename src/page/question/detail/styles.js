
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

export const QuestionContainer = styled.div`
  width: 100%;
  max-width: 800px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 40px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 16px;
`;

export const MetaInfo = styled.div`
  display: flex;
  gap: 16px;
  color: #666;
  margin-bottom: 32px;
`;

export const MetaItem = styled.span`
  font-size: 16px;
`;

export const Content = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: #333;
`;

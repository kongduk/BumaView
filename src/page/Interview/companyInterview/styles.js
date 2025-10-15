import styled from '@emotion/styled';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

export const Flex = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Left = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Right = styled.div`
  width: 300px;
  padding: 0 100px;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

// 모의면접 페이지 스타일
export const InterviewContainer = styled.div`
  background: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FilterButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 20px;
`;

export const FilterButton = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  border: 2px solid #4facfe;
  background: white;
  color: #4facfe;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &.active {
    background: #4facfe;
    color: white;
  }

  &:hover:not(.active) {
    background: #f0f8ff;
  }
`;

export const CameraContainer = styled.div`
  width: 100%;
  height: 400px;
  background: black;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AIQuestionContainer = styled.div`
  background: #f5f5f5;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

export const RecordingContainer = styled.div`
background: #f9f9f9;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 60px;
  width: 100%;
  height: 60%;
`;

export const RecordingTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  color: #333;
  background: #FFFFFF;
  margin-bottom: 16px;
  text-align: center;
`;

export const RecordingContent = styled.div`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  padding: 12px;
  background: #f9f9f9;
  border-radius: 8px;
  height: calc(100% - 60px);
  overflow-y: auto;
  white-space: pre-wrap;
`;




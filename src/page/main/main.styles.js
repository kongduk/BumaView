import styled from '@emotion/styled';
import BackImg from '@/assets/back.png'

export const Container = styled.div`
  font-family: 'Pretendard', sans-serif;
  color: #333;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
  }
`;


export const Hero = styled.section`
  position: relative;
  background: url(${BackImg}) center/cover;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right bottom, #2D92E5, #FFFFFF);
  opacity: 80%;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 700px;
  padding: 120px 60px 80px;
  color: white;
`;

export const HeroTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const HeroDesc = styled.p`
  margin-bottom: 30px;
  line-height: 1.6;
`;

export const PrimaryBtn = styled.button`
  background: #1976d2;
  color: white;
  padding: 12px 28px;
  border: none;
  border-radius: 8px;
  margin-right: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const SecondaryBtn = styled.button`
  background: white;
  color: #1976d2;
  padding: 12px 28px;
  border: 1px solid #1976d2;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
`;

export const Wave = styled.div`
  position: relative;
  top: 5px;
`;

export const Companies = styled.section`
  padding: 80px 60px;
  background: #f9f9f9;
  text-align: center;

  h2 {
    margin-bottom: 50px;
    font-size: 1.8rem;
  }
`;

export const CompanyCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const CompanyCard = styled.div`
  background: white;
  padding: 30px 20px;
  border-radius: 16px;
  width: 240px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Person = styled.div`
  margin-top: 20px;
  font-size: 0.9rem;
  color: gray;
`;

export const Stats = styled.section`
  padding: 80px 60px;
  text-align: center;
`;

export const StatCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 40px;
`;

export const StatCard = styled.div`
  background: #fff;
  padding: 30px 40px;
  border-radius: 16px;
  font-size: 1.2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  strong {
    font-size: 1.8rem;
    display: block;
    margin-bottom: 8px;
  }

  p {
    margin: 0;
    font-size: 1rem;
    color: gray;
  }
`;

export const StatIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
`;


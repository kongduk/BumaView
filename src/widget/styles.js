import styled from '@emotion/styled';

export const Footer = styled.footer`
  padding: 50px 60px;
  background: #333;
  color: white;
  text-align: center;

  nav {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 0.95rem;
  }
`;

export const Socials = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 1.2rem;
`;
export const Nav = styled.nav`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;

    &.active {
      color: #4facfe;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background: white;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const Profile = styled.div`
  font-size: 0.9rem;
  color: gray;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const LogoImage = styled.img`
  height: 1.8rem;
`;

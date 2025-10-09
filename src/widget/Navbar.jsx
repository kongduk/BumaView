import { NavLink, useNavigate } from "react-router-dom";
import * as S from "./styles";
import Logo from "@/assets/logo.png";

function Navbar() {
  const navigate = useNavigate();
  return (
    <S.Header>
      <S.LogoContainer onClick={() => navigate("/")}>
        <S.Logo>Buma View</S.Logo>
        <S.LogoImage src={Logo} alt="Buma View" />
      </S.LogoContainer>
      <S.Nav>
        <NavLink to="/question" className={({ isActive }) => (isActive ? "active" : "")}>기업질문</NavLink>
        <NavLink to="/interview" className={({ isActive }) => (isActive ? "active" : "")}>모의면접</NavLink>
        <NavLink to="/analyze" className={({ isActive }) => (isActive ? "active" : "")}>기업분석</NavLink>
      </S.Nav>
      <S.Profile>자기소개서</S.Profile>
    </S.Header>
  );
}

export default Navbar;

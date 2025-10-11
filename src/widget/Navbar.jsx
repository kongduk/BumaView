import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import * as S from "./styles";
import Logo from "@/assets/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isResumeDropdownOpen, setIsResumeDropdownOpen] = useState(false);
  const [isInterviewDropdownOpen, setIsInterviewDropdownOpen] = useState(false);

  const isInterviewActive = location.pathname.startsWith("/interview");
  const isResumeActive = location.pathname.startsWith("/resume");

  return (
    <S.Header>
      <S.LogoContainer onClick={() => navigate("/")}>
        <S.Logo>Buma View</S.Logo>
        <S.LogoImage src={Logo} alt="Buma View" />
      </S.LogoContainer>
      <S.Nav>
        <NavLink to="/question" className={({ isActive }) => (isActive ? "active" : "")}>기업질문</NavLink>
        <S.ProfileContainer
          onMouseEnter={() => setIsInterviewDropdownOpen(true)}
          onMouseLeave={() => setIsInterviewDropdownOpen(false)}
        >
          <S.Profile className={isInterviewActive ? "active" : ""} onClick={() => navigate("/interview")}>모의면접</S.Profile>
          {isInterviewDropdownOpen && (
            <S.DropdownMenu>
              <S.DropdownItem onClick={() => navigate("/interview/my")}>내 모의면접</S.DropdownItem>
              <S.DropdownItem onClick={() => navigate("/interview/new")}>새 모의면의</S.DropdownItem>
            </S.DropdownMenu>
          )}
        </S.ProfileContainer>
        <NavLink to="/company" className={({ isActive }) => (isActive ? "active" : "")}>회사</NavLink>
        <NavLink to="/expected" className={({ isActive }) => (isActive ? "active" : "")}>예상 질문</NavLink>
        <NavLink to="/analyze" className={({ isActive }) => (isActive ? "active" : "")}>기업분석</NavLink>
      </S.Nav>
      <S.ProfileContainer
        onMouseEnter={() => setIsResumeDropdownOpen(true)}
        onMouseLeave={() => setIsResumeDropdownOpen(false)}
      >
        <S.Profile className={isResumeActive ? "active" : ""}>자기소개서</S.Profile>
        {isResumeDropdownOpen && (
          <S.DropdownMenu>
            <S.DropdownItem onClick={() => navigate("/resume/my")}>내 자소서</S.DropdownItem>
            <S.DropdownItem onClick={() => navigate("/resume/shared")}>공유 자소서</S.DropdownItem>
          </S.DropdownMenu>
        )}
      </S.ProfileContainer>
    </S.Header>
  );
}

export default Navbar;

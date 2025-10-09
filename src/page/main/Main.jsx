import React from "react";
import * as S from "./main.styles";
import companies from "@/data/companies.js";

export default function Main() {
  return (
    <S.Container>
      {/* Hero Section */}
      <S.Hero>
        <S.HeroOverlay />
        <S.HeroContent>
          <S.HeroTitle>값진 노력 & 자연스러운 결과</S.HeroTitle>
          <S.HeroDesc>
            <strong>Buma View</strong>는 부산소프트웨어 마이스터고 학생들이
            취업한 회사들의 역대 면접 질문 데이터를 통해 부산소프트웨어
            마이스터고 학생들의 취업을 증진을 위한 취업 면접 도우미
            서비스입니다.
          </S.HeroDesc>
          <div>
            <S.PrimaryBtn>시작하기</S.PrimaryBtn>
            <S.SecondaryBtn>설명보기</S.SecondaryBtn>
          </div>
        </S.HeroContent>
        <S.Wave>
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,224L60,192C120,160,240,96,360,80C480,64,600,96,720,106.7C840,117,960,107,1080,112C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </S.Wave>
      </S.Hero>

      {/* Companies Section */}
      <S.Companies>
        <h2>이때까지 이런회사들에 취업했어요!</h2>
        <S.CompanyCards>
          {companies.map((company, idx) => (
            <S.CompanyCard key={idx}>
              <h3>{company.name}</h3>
              <p>{company.description}</p>
              <S.Person>
                <div>{company.person.name}</div>
                <span>{company.person.role}</span>
              </S.Person>
            </S.CompanyCard>
          ))}
        </S.CompanyCards>
      </S.Companies>

      {/* Stats Section */}
      <S.Stats>
        <h2>BumaView 당신의 노력에 답하다.</h2>
        <p>Buma View 부산소마고를 거쳐간 사람들의 발자국을 보세요!</p>
        <S.StatCards>
          <S.StatCard>
            <S.StatIcon>👤</S.StatIcon>
            <strong>100+</strong>
            <p>User</p>
          </S.StatCard>
          <S.StatCard>
            <S.StatIcon>🏢</S.StatIcon>
            <strong>50+</strong>
            <p>Company Data</p>
          </S.StatCard>
          <S.StatCard>
            <S.StatIcon>❓</S.StatIcon>
            <strong>300+</strong>
            <p>Question</p>
          </S.StatCard>
        </S.StatCards>
      </S.Stats>

    </S.Container>
  );
}

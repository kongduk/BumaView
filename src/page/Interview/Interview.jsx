import React, { useState } from "react";
import { Search, MessageCircleQuestion } from "lucide-react";
import question from "@/data/question";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export default function Interview() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState(question);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(10);

  const navigate = useNavigate();

  const tabs = ["All", "Web", "Ai", "Security", "Embedded"];

  const handleSearch = () => {
    setFilteredQuestions(
      question.filter(
        (item) =>
          (activeTab === "All" || item.category === activeTab) &&
          item.company.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setVisibleCount(10);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setFilteredQuestions(
      question.filter(
        (item) =>
          (tab === "All" || item.category === tab) &&
          item.question.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setVisibleCount(10);
  };

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const loadMoreQuestions = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  return (
    <S.Container>
      <S.Flex>
        <S.Left>
          <S.Main>
            <S.SearchContainer>
              <S.CategoryTabs>
                {tabs.map((tab) => (
                  <S.Tab
                    key={tab}
                    className={activeTab === tab ? "active" : ""}
                    onClick={() => handleTabClick(tab)}
                  >
                    {tab}
                  </S.Tab>
                ))}
              </S.CategoryTabs>

              <S.SearchBox>
                <S.SearchInput
                  type="text"
                  placeholder="원하시는 회사를 검색해보세요!"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />

                <S.SearchButton onClick={handleSearch}>
                  <Search size={20} />
                  회사 찾기
                </S.SearchButton>
              </S.SearchBox>
            </S.SearchContainer>
            <S.QuestionList>
              {filteredQuestions.slice(0, visibleCount).map((item) => (
                <S.QuestionCard key={item.id}>
                  <S.QuestionContent>
                    <S.QuestionText>{item.question}</S.QuestionText>
                    <S.QuestionRole>{item.company} - {item.field}</S.QuestionRole>
                  </S.QuestionContent>
                  <S.InterviewButton onClick={() => navigate(`/interview/${item.id}`)}>입장하기</S.InterviewButton>
                </S.QuestionCard>
              ))}
              {visibleCount < filteredQuestions.length && (
                <S.MoreButton onClick={loadMoreQuestions}>
                  면접 더보기
                </S.MoreButton>
              )}
            </S.QuestionList>
          </S.Main>
        </S.Left>

        <S.Right>
          <S.SidebarContainer>
            <S.SidebarTitle onClick={() => navigate("/interview")}>interview</S.SidebarTitle>
            <S.SidebarItem onClick={() => navigate("/interview/my")}>My interview</S.SidebarItem>
            <S.SidebarItem onClick={() => navigate("/interview/new")}>New interview</S.SidebarItem>
          </S.SidebarContainer>
        </S.Right>
      </S.Flex>
    </S.Container>
  );
}

import React, { useState } from "react";
import { Search, MessageCircleQuestion } from "lucide-react";
import question from "@/data/question";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export default function Question() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState(question);
  const [visibleCount, setVisibleCount] = useState(10);

  const navigate = useNavigate();

  const tabs = ["All", "Web", "Ai", "Security", "Embedded"];

  const handleSearch = () => {
    setFilteredQuestions(
      question.filter(
        (item) =>
          (activeTab === "All" || item.category === activeTab) &&
          item.question.toLowerCase().includes(searchQuery.toLowerCase())
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
                  placeholder="프로젝트"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />

                <S.SearchButton onClick={handleSearch}>
                  <Search size={20} />
                  질문 찾기
                </S.SearchButton>
              </S.SearchBox>
            </S.SearchContainer>
            <S.QuestionList>
              {filteredQuestions.slice(0, visibleCount).map((item) => (
                <S.QuestionCard key={item.id} onClick={() => navigate(`/question/${item.id}`)}>
                  <S.QuestionContent>
                    <S.QuestionText>{item.question}</S.QuestionText>
                    <S.QuestionRole>{item.company} - {item.field}</S.QuestionRole>
                  </S.QuestionContent>
                  <S.TeacherName>{item.teacher}</S.TeacherName>
                </S.QuestionCard>
              ))}
              {visibleCount < filteredQuestions.length && (
                <S.MoreButton onClick={loadMoreQuestions}>
                  질문 더보기
                </S.MoreButton>
              )}
            </S.QuestionList>
          </S.Main>
        </S.Left>

        <S.Right>
          <S.SidebarContainer>
            <S.SidebarTitle onClick={() => navigate("/question")}>Question</S.SidebarTitle>
            <S.SidebarItem onClick={() => navigate("/question/my")}>My Question</S.SidebarItem>
            <S.SidebarItem onClick={() => navigate("/question/new")}>New Question</S.SidebarItem>
          </S.SidebarContainer>
        </S.Right>
      </S.Flex>
    </S.Container>
  );
}

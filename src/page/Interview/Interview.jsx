import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useQuestions } from "@/lib/hooks/useQuestion";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export default function Interview() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  const navigate = useNavigate();
  const { data: questions, isLoading, isError, error } = useQuestions();

  const tabs = ["All", "Web", "Ai", "Security", "Embedded"];

  useEffect(() => {
    if (questions) {
      const newFilteredQuestions = questions.filter(
        (item) =>
          (activeTab === "All" || item.occupation_id === activeTab) &&
          item.question_text.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredQuestions(newFilteredQuestions);
      setVisibleCount(10);
    }
  }, [questions, activeTab, searchQuery]);

  const handleSearch = () => {
    // Filtering is handled by useEffect
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const loadMoreQuestions = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  if (isLoading) {
    return <S.Container><S.Main><div>면접 목록을 불러오는 중입니다...</div></S.Main></S.Container>;
  }

  if (isError) {
    return <S.Container><S.Main><div>면접 목록을 불러오는데 오류가 발생했습니다: {error.message}</div></S.Main></S.Container>;
  }

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
                  placeholder="원하시는 질문을 검색해보세요!"
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
                <S.QuestionCard key={item.question_id}>
                  <S.QuestionContent>
                    <S.QuestionText>{item.question_text}</S.QuestionText>
                    <S.QuestionRole>{item.company_id} - {item.occupation_id}</S.QuestionRole>
                  </S.QuestionContent>
                  <S.ButtonContainer>
                    <S.InterviewButton onClick={() => navigate(`/interview/${item.question_id}`)}>입장하기</S.InterviewButton>
                    <S.ReviewButton onClick={() => navigate(`/review/list/${item.question_id}`)}>리뷰보기</S.ReviewButton>
                  </S.ButtonContainer>
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
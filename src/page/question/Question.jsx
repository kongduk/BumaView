import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useQuestions } from "@/lib/question/question"; // Import useQuestions hook

export default function Question() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState([]); // Initialize as empty
  const [visibleCount, setVisibleCount] = useState(10);

  const navigate = useNavigate();

  const tabs = ["All", "Web", "Ai", "Security", "Embedded"];

  const { data: questions, isLoading, isError, error } = useQuestions(); // Use useQuestions hook

  // Effect to filter questions whenever questions data, activeTab, or searchQuery changes
  useEffect(() => {
    if (questions) {
      const newFilteredQuestions = questions.filter(
        (item) =>
          (activeTab === "All" || item.occupation_id === activeTab) && // Assuming occupation_id maps to tabs
          item.question_text.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredQuestions(newFilteredQuestions);
      setVisibleCount(10); // Reset visible count on new filter
    }
  }, [questions, activeTab, searchQuery]);


  const handleSearch = () => {
    // Filtering is now handled by the useEffect above, just trigger a re-filter by changing searchQuery
    // No direct action needed here as useEffect will react to searchQuery change
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Filtering is now handled by the useEffect above, just trigger a re-filter by changing activeTab
  };

  const loadMoreQuestions = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  if (isLoading) {
    return <S.Container><S.Main><div>질문 목록을 불러오는 중입니다...</div></S.Main></S.Container>;
  }

  if (isError) {
    return <S.Container><S.Main><div>질문 목록을 불러오는데 오류가 발생했습니다: {error.message}</div></S.Main></S.Container>;
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
                <S.QuestionCard key={item.question_id} onClick={() => navigate(`/question/${item.question_id}`)}>
                  <S.QuestionContent>
                    <S.QuestionText>{item.question_text}</S.QuestionText>
                    {/* Display difficulty if available, or remove if not relevant for list view */}
                    <S.QuestionRole>난이도: {item.difficulty || '미정'}</S.QuestionRole>
                  </S.QuestionContent>
                  <S.TeacherName>{item.company_id}-{item.occupation_id}</S.TeacherName>
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

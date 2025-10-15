import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import * as S from "../styles";
import { useNavigate } from "react-router-dom";
import { useQuestions, useDeleteQuestion } from "@/lib/question/question";

export default function MyQuestion() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  const navigate = useNavigate();
  const { data: questions, isLoading, isError, error } = useQuestions();
  const deleteMutation = useDeleteQuestion();

  const tabs = ["All", "Web", "Ai", "Security", "Embedded"];
  const myUserId = 1; // Assuming a static user ID for now

  useEffect(() => {
    if (questions) {
      const myQuestions = questions.filter(q => q.author_id === myUserId);
      const newFilteredQuestions = myQuestions.filter(
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

  const handleDelete = (id) => {
    if (window.confirm("정말로 이 질문을 삭제하시겠습니까?")) {
      deleteMutation.mutate(id);
    }
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
                  placeholder="질문 검색..."
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
                    <S.RoleContainer>
                      <S.QuestionRole>{item.company_id} - {item.occupation_id}</S.QuestionRole>
                      <S.ButtonContainer>
                        <S.ModifyButton onClick={(e) => { e.stopPropagation(); navigate(`/question/edit/${item.question_id}`); }}>수정</S.ModifyButton>
                        <S.DeleteButton onClick={(e) => { e.stopPropagation(); handleDelete(item.question_id); }}>삭제</S.DeleteButton>
                      </S.ButtonContainer>
                    </S.RoleContainer>
                  </S.QuestionContent>
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
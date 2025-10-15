import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export default function Question() {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(10);
  const navigate = useNavigate();

  const tabs = ["All", "Web", "Ai", "Security", "Embedded", "Game"];

  useEffect(() => {
    const saved = localStorage.getItem("questions");
    if (saved) {
      setQuestions(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    const filtered = questions.filter(
      (q) =>
        (activeTab === "All" || q.occupation_id === activeTab) &&
        q.question_text.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredQuestions(filtered);
  }, [questions, activeTab, searchQuery]);

  const loadMoreQuestions = () => {
    setVisibleCount((prev) => prev + 10);
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
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </S.Tab>
                ))}
              </S.CategoryTabs>

              <S.SearchBox>
                <S.SearchInput
                  type="text"
                  placeholder="질문 검색"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <S.SearchButton>
                  <Search size={20} /> 질문 찾기
                </S.SearchButton>
              </S.SearchBox>
            </S.SearchContainer>

            <S.QuestionList>
              {filteredQuestions.length === 0 && (
                <div>등록된 질문이 없습니다.</div>
              )}

              {filteredQuestions.slice(0, visibleCount).map((item, idx) => (
                <S.QuestionCard key={idx}>
                  <S.QuestionContent>
                    <S.QuestionText>{item.question_text}</S.QuestionText>
                    <S.QuestionRole>
                      난이도: {item.difficulty}
                    </S.QuestionRole>
                  </S.QuestionContent>
                  <S.TeacherName>
                    {item.company_id} - {item.occupation_id}
                  </S.TeacherName>
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
            <S.SidebarTitle onClick={() => navigate("/question")}>
              Question
            </S.SidebarTitle>
            <S.SidebarItem onClick={() => navigate("/question/my")}>
              My Question
            </S.SidebarItem>
            <S.SidebarItem onClick={() => navigate("/question/new")}>
              New Question
            </S.SidebarItem>
          </S.SidebarContainer>
        </S.Right>
      </S.Flex>
    </S.Container>
  );
}
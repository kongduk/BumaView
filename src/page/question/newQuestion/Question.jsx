import React, { useState } from "react";
import { Search, MessageCircleQuestion } from "lucide-react";
import * as S from "../styles";
import { useNavigate } from "react-router-dom";

export default function NewQuestion() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const tabs = ["All", "Web", "Ai", "Security", "Embedded"];

  const handleClickTab = (tab) => {
    setActiveTab(tab);
    console.log(activeTab);
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
                    onClick={() => { handleClickTab(tab) }}
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

                <S.SearchButton onClick={() => { }}>
                  <Search size={20} />
                  질문 찾기
                </S.SearchButton>
              </S.SearchBox>
            </S.SearchContainer>
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

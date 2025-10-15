import React, { useState } from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useAddQuestion } from "@/lib/question/question";

export default function NewQuestion() {
  const [questions, setQuestions] = useState([
    { company_id: "", occupation_id: "Web", question_text: "", model_answer: "", difficulty: "중" },
  ]);
  const navigate = useNavigate();
  const addQuestionMutation = useAddQuestion();

  const categories = ["Web", "Ai", "Security", "Embedded", "Game"];

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { company_id: "", occupation_id: "Web", question_text: "", model_answer: "", difficulty: "중" },
    ]);
  };

  const handleDeleteQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  const handleQuestionChange = (index, prop, value) => {
    const newQuestions = [...questions];
    newQuestions[index][prop] = value;
    setQuestions(newQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming author_id is 1 for now
    const author_id = 1;
    questions.forEach(question => {
        addQuestionMutation.mutate({ ...question, author_id });
    });
    navigate("/question");
  };

  return (
    <S.Container>
      <S.Flex>
        <S.Left>
          <S.Main>
            <S.FormContainer>
              <S.FormTitle>새 질문 등록</S.FormTitle>
              <form onSubmit={handleSubmit}>
                {questions.map((q, index) => (
                  <S.QuestionForm key={index}>
                    <S.FormGroup>
                      <S.Label htmlFor={`company-${index}`}>회사 ID</S.Label>
                      <S.Input
                        type="number"
                        id={`company-${index}`}
                        value={q.company_id}
                        onChange={(e) =>
                          handleQuestionChange(index, "company_id", parseInt(e.target.value))
                        }
                        required
                      />
                    </S.FormGroup>
                    <S.FormGroup>
                      <S.Label htmlFor={`category-${index}`}>분야</S.Label>
                      <S.Select
                        id={`category-${index}`}
                        value={q.occupation_id}
                        onChange={(e) =>
                          handleQuestionChange(
                            index,
                            "occupation_id",
                            e.target.value
                          )
                        }
                      >
                        {categories.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </S.Select>
                    </S.FormGroup>
                    <S.FormGroup>
                      <S.Label htmlFor={`question-${index}`}>질문</S.Label>
                      <S.Textarea
                        id={`question-${index}`}
                        value={q.question_text}
                        onChange={(e) =>
                          handleQuestionChange(
                            index,
                            "question_text",
                            e.target.value
                          )
                        }
                        required
                      />
                    </S.FormGroup>
                    <S.FormGroup>
                      <S.Label htmlFor={`answer-${index}`}>모범답안</S.Label>
                      <S.Textarea
                        id={`answer-${index}`}
                        value={q.model_answer}
                        onChange={(e) =>
                          handleQuestionChange(
                            index,
                            "model_answer",
                            e.target.value
                          )
                        }
                        required
                      />
                    </S.FormGroup>
                    <S.FormGroup>
                        <S.Label>난이도</S.Label>
                        <S.Select value={q.difficulty} onChange={(e) => handleQuestionChange(index, "difficulty", e.target.value)}>
                            <option value="상">상</option>
                            <option value="중">중</option>
                            <option value="하">하</option>
                        </S.Select>
                    </S.FormGroup>
                    {index > 0 && (
                      <S.DeleteButton
                        type="button"
                        onClick={() => handleDeleteQuestion(index)}
                      >
                        삭제
                      </S.DeleteButton>
                    )}
                  </S.QuestionForm>
                ))}
                <S.AddButton type="button" onClick={handleAddQuestion}>
                  질문 추가하기
                </S.AddButton>
                <S.SubmitButton type="submit" disabled={addQuestionMutation.isLoading}>
                    {addQuestionMutation.isLoading ? '등록 중...' : '모든 질문 등록'}
                </S.SubmitButton>
              </form>
            </S.FormContainer>
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
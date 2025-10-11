import React, { useState, useEffect, useRef } from "react";
import { HelpCircle } from "lucide-react";
import question from "@/data/question";
import * as S from "./styles";
import { useParams } from "react-router-dom";

export default function CompanyInterview() {
  const [current, setCurrent] = useState(null);
  const [aiQuestion, setAiQuestion] = useState("AI의 질문은 여기에 뜨게 됩니다. 최대 두줄 분량의 질문이 뜨게됩니다.");
  const [recording, setRecording] = useState("");
  const [interimTranscript, setInterimTranscript] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef(null);
  const videoRef = useRef(null);
  const recordingRef = useRef(null);
  const [hasFirstAnswer, setHasFirstAnswer] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const selectedQuestion = question.find(q => q.id === parseInt(id));
      setCurrent(selectedQuestion);
    }
  }, [id]);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: true, 
          audio: true 
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('카메라 접근 실패:', error);
      }
    };
    startCamera();
  }, []);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.error("이 브라우저는 음성 인식을 지원하지 않습니다.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "ko-KR";

    recognition.onresult = (event) => {
      let interim = "";
      let final = "";

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final += event.results[i][0].transcript.trim() + "\n";
        } else {
          interim += event.results[i][0].transcript;
        }
      }

      if (final) {
        setRecording(prev => {
          if (!hasFirstAnswer) {
            setHasFirstAnswer(true);
            return prev + "대답: " + final;
          }
          return prev + "대답: " + final;
        });
        setInterimTranscript("");
      }

      if (interim) {
        setInterimTranscript(interim);
      }
    };

    recognition.onerror = (event) => {
      console.error("음성 인식 오류:", event.error);
    };

    recognitionRef.current = recognition;
    recognition.start();
    setIsRecording(true);

    return () => {
      recognition.stop();
      setIsRecording(false);
    };
  }, [hasFirstAnswer]);

  useEffect(() => {
    if (recordingRef.current) {
      recordingRef.current.scrollTop = recordingRef.current.scrollHeight;
    }
  }, [recording, interimTranscript]);

  return (
    <S.Container>
      <S.Flex>
        <S.Left>
          <S.Main>
            <S.InterviewContainer>
              <S.FilterButtons>
                <S.FilterButton className="active">{current?.field || ""}</S.FilterButton>
                <S.FilterButton>{current?.company || ""}</S.FilterButton>
              </S.FilterButtons>

              {/* 카메라 */}
              <S.CameraContainer>
                <S.Video ref={videoRef} autoPlay muted playsInline />
              </S.CameraContainer>

              {/* AI 질문 */}
              <S.AIQuestionContainer>
                <S.QuestionIcon>
                  <HelpCircle size={20} />
                </S.QuestionIcon>
                <S.AIQuestionText>{aiQuestion}</S.AIQuestionText>
              </S.AIQuestionContainer>
            </S.InterviewContainer>
          </S.Main>
        </S.Left>

        {/* 기록 박스 */}
        <S.Right>
          <S.RecordingContainer>
            <S.RecordingTitle>기록</S.RecordingTitle>
            <S.RecordingContent ref={recordingRef}>
              {recording}
              <span style={{ color: "gray" }}>{interimTranscript}</span>
            </S.RecordingContent>
          </S.RecordingContainer>
        </S.Right>
      </S.Flex>
    </S.Container>
  );
}

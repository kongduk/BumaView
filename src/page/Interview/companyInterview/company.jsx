import React, { useState, useEffect, useRef } from "react";
import { HelpCircle } from "lucide-react";
import * as S from "./styles";
import { useParams } from "react-router-dom";
import { useQuestionDetails } from "@/lib/hooks/useQuestion";

export default function CompanyInterview() {
  const [aiQuestion, setAiQuestion] = useState("AI의 질문은 여기에 뜨게 됩니다. 최대 두줄 분량의 질문이 뜨게됩니다.");
  const [recording, setRecording] = useState("");
  const [interimTranscript, setInterimTranscript] = useState("");
  const recognitionRef = useRef(null);
  const videoRef = useRef(null);
  const ws = useRef(null);
  const { id } = useParams();
  const { data: current } = useQuestionDetails(id);

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

    ws.current = new WebSocket(import.meta.env.VITE_WEBSOCKET_URL);

    ws.current.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'question') {
        setAiQuestion(message.data);
      }
    };

    ws.current.onclose = () => {
      console.log("WebSocket disconnected");
    };

    ws.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
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

      if (final && ws.current && ws.current.readyState === WebSocket.OPEN) {
        ws.current.send(JSON.stringify({ type: 'answer', data: final }));
        setRecording(prev => prev + "나의 답변: " + final);
      }

      setInterimTranscript(interim);
    };

    recognition.onerror = (event) => {
      console.error("음성 인식 오류:", event.error);
    };

    recognitionRef.current = recognition;
    recognition.start();
  }, []);

  return (
    <S.Container>
      <S.Flex>
        <S.Left>
          <S.Main>
            <S.InterviewContainer>
              <S.FilterButtons>
                <S.FilterButton className="active">{current?.occupation_id || ""}</S.FilterButton>
                <S.FilterButton>{current?.company_id || ""}</S.FilterButton>
              </S.FilterButtons>

              <S.CameraContainer>
                <S.Video ref={videoRef} autoPlay muted playsInline />
              </S.CameraContainer>

              <S.AIQuestionContainer>
                <S.QuestionIcon>
                  <HelpCircle size={20} />
                </S.QuestionIcon>
                <S.AIQuestionText>{aiQuestion}</S.AIQuestionText>
              </S.AIQuestionContainer>
            </S.InterviewContainer>
          </S.Main>
        </S.Left>

        <S.Right>
          <S.RecordingContainer>
            <S.RecordingTitle>기록</S.RecordingTitle>
            <S.RecordingContent>
              {recording}
              <span style={{ color: "gray" }}>{interimTranscript}</span>
            </S.RecordingContent>
          </S.RecordingContainer>
        </S.Right>
      </S.Flex>
    </S.Container>
  );
};
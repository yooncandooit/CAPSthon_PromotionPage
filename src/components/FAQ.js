import { useState } from "react";
import styled from "styled-components";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // react-icons 라이브러리에서 아이콘 가져오기

const Container = styled.div`
  width: 100%;
  max-width: 800px; /* 최대 너비 설정 */
  margin: 0 auto; /* 중앙 정렬 */
  padding: 20px;
  box-sizing: border-box;
`;

const FaqTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
  color: #444; /* 제목 색상 조정 */
`;

const FaqItem = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: #f9f9f9; /* 배경 색상 조정 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #ffffff; /* 배경 색상 조정 */
  cursor: pointer;
  border-bottom: 1px solid #ddd; /* 하단 경계선 추가 */

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Question = styled.p`
  margin: 0;
  font-size: 1.2rem;
  color: #333; /* 질문 색상 조정 */
`;

const ToggleIcon = styled.div`
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.visible ? "rotate(180deg)" : "rotate(0deg)")};
  color: #666; /* 아이콘 색상 조정 */
`;

const ToggleContent = styled.div`
  padding: 15px;
  background-color: #f7f7f7; /* 배경 색상 조정 */
  border-top: 1px solid #ddd; /* 상단 경계선 추가 */
  transition: max-height 0.3s ease, padding 0.3s ease;
  text-align:left;
  max-height: ${(props) => (props.visible ? "300px" : "0")}; /* 높이 조정 */
  overflow: hidden;
  padding-top: ${(props) => (props.visible ? "15px" : "0")}; /* 패딩 조정 */
`;

const FAQ = ({ className = "" }) => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  const toggleVisibility = (index) => {
    setVisibleIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  const sections = [
    { question: "누구나 지원 가능한가요?", answer: "CAPS 부원이면 모두 지원 가능합니다! 많은 관심 부탁드립니다." },
    { question: "어떤 세션이 있나요?", answer: "기획, 디자인, 프론트엔드, 백엔드로 참여할 수 있습니다!" },
    { question: "포트폴리오 필요한가요?", answer: "아뇨, 필요하지 않습니다!" },
    { question: "지원 방법이 궁금해요!", answer: "기한 내에 사담방의 구글 폼 링크로 이동해서 지원서를 작성해 주세요!" },
    { question: "장비 지참해야 하나요?", answer: "개인 지참 하셔서 진행하시면 됩니다!" },
    { question: "외부 에셋 활용해도 되나요?", answer: "무료로 사용할 수 있는 에셋은 사용할 수 있습니다! 다만 유료 에셋은 사용 불가합니다." },
    { question: "생성형 AI 제한이 있나요?", answer: "따로 제한되어 있지 않습니다." }
  ];

  return (
    <Container className={className}>
      <FaqTitle>FAQ</FaqTitle>
      {sections.map((section, index) => (
        <FaqItem key={index}>
          <QuestionContainer onClick={() => toggleVisibility(index)}>
            <Question>{section.question}</Question>
            <ToggleIcon visible={visibleIndexes.includes(index)}>
              {visibleIndexes.includes(index) ? <FaChevronUp /> : <FaChevronDown />}
            </ToggleIcon>
          </QuestionContainer>
          <ToggleContent visible={visibleIndexes.includes(index)}>
            <p>{section.answer}</p>
          </ToggleContent>
        </FaqItem>
      ))}
    </Container>
  );
};

export default FAQ;

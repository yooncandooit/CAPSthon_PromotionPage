import { useState } from "react";
import styled from "styled-components";

// 아이콘 스타일 설정
const Icon = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 60px;  /* 고정 너비 설정 */
  height: 60px; /* 고정 높이 설정 */
  border-radius: 50%; /* 원형으로 만들기 */
  background-color: #EAEAEA; /* 하얀색 배경 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 그림자 추가 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 15; /* 아이콘이 이미지 위에 위치하도록 설정 */
  border:5px solid black;
  @media (max-width: 768px) {
    width: 40px; /* 모바일 화면에서 크기 조정 */
    height: 40px; /* 모바일 화면에서 크기 조정 */
  }
`;

// 제목 스타일 설정
const Guide = styled.h1`
  position: relative;
  text-align: center; /* 제목을 가운데 정렬 */
  z-index: 20; /* 제목이 이미지와 아이콘 위에 위치하도록 설정 */
  margin-top: 10px; /* 제목과 이미지 사이의 간격 설정 */
  margin-bottom: 30px; /* 제목과 이미지 사이의 간격 설정 */
  padding: 0px; /* 제목에 여백 추가 (선택 사항) */
`;

// 전체 컨테이너 스타일 설정
const GuideRoot = styled.div`
  position: relative;
  width: 100%; /* 필요에 따라 조정 */
  height: 380px; /* 필요에 따라 조정 */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #EAEAEA;
  overflow: hidden; /* 자식 요소가 컨테이너를 넘지 않도록 설정 */
  padding: 30px 0;
  `;

// 이미지 컨테이너 스타일 설정
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 40vh; /* 필요에 따라 조정 */
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 40vh; /* 모바일 화면에서 높이를 줄여서 이미지가 더 보이도록 조정 */
  }
`;


// 이미지 스타일 설정
const BackgroundImage = styled.img`
  position: absolute;
  width: 40%; /* 필요에 따라 조정 */
  height: auto; /* 비율을 유지하면서 높이를 자동으로 설정 */
  transition: transform 0.5s ease; /* 애니메이션 효과 추가 */
  border-radius: 10px; /* 이미지의 모서리를 둥글게 설정 */

  @media (max-width: 768px) {
    width: 70%; /* 모바일 화면에서 이미지 크기를 조정 */
  }
`;

// 이전 및 다음 이미지 스타일 설정
const SideImage = styled(BackgroundImage)`
  width: 30%;
  transition: transform 0.5s ease; /* 애니메이션 효과 추가 */
`;

const imageQueue = ["1-capsthon.png", "2-schedule infomation.png", "3-sessions.png", "4-team building.png", "5-main themes.png", "6-judging criteria.png", "7-how to submit.png", "8-prizes.png"];

const GUIDE = ({ className = "", top }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState("none"); // 애니메이션 방향

  const handlePrevClick = () => {
    setDirection("prev");
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageQueue.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setDirection("next");
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageQueue.length - 1 ? 0 : prevIndex + 1
    );
  };

  return ( /* id=section 추가 */
    <GuideRoot className={className} top={top} id="guide-section">
      <Guide>GUIDE</Guide>
      <ImageContainer>
        <SideImage
          alt="Previous"
          src={imageQueue[(currentImageIndex - 1 + imageQueue.length) % imageQueue.length]}
          style={{ transform: direction === "prev" ? "translateX(-100%)" : "translateX(-100%)", zIndex: 0 }}
        />
        <BackgroundImage
          alt="Current"
          src={imageQueue[currentImageIndex]}
          style={{ transform: direction === "prev" ? "translateX(0%)" : "translateX(0%)", zIndex: 1 }}
        />
        <SideImage
          alt="Next"
          src={imageQueue[(currentImageIndex + 1) % imageQueue.length]}
          style={{ transform: direction === "next" ? "translateX(100%)" : "translateX(100%)", zIndex: 0 }}
        />
      </ImageContainer>
      <Icon
        alt="Previous"
        src="/icon.svg"
        style={{ left: "5%" }} /* 왼쪽 아이콘 위치 조정 */
        onClick={handlePrevClick}
      />
      <Icon
        alt="Next"
        src="/icon1.svg"
        style={{ right: "5%" }} /* 오른쪽 아이콘 위치 조정 */
        onClick={handleNextClick}
      />
    </GuideRoot>
  );
};

export default GUIDE;

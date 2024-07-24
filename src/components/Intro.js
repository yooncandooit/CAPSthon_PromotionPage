import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 800px; /* 최대 너비 설정 */
  margin: 0 auto; /* 중앙 정렬 */
  padding: 20px;
  box-sizing: border-box;
  text-align: center; /* 가운데 정렬 */
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px; /* 이미지 최대 너비 */
  height: auto;
  margin-bottom: 20px; /* 이미지와 텍스트 사이의 간격 */
`;

const ArrowImage = styled.img`
  width: 50px; /* 화살표 이미지 너비 설정 */
  height: auto; /* 비율 유지 */
  margin-top: 20px; /* 상단 여백 */
`;

const Intro = () => {
  return (
    <section id="intro-section">
      <Container>
        <Image src={`${process.env.PUBLIC_URL}/capsthon-logo.png`} alt="CAPSthon-logo" />
        <h2>CAPSthon 소개</h2>
        <p>
          CAPSthon은 CAPS + 캡스톤디자인으로 CAPS에서 진행하는 프로젝트형 신규사업입니다!<br />
          3~4명이 팀을 이루어 한 달 동안 협력해서 프로젝트를 완성하는 대회입니다.<br />
          팀과 함께 협력하여 창의적인 아이디어를 실현해보세요!<br />
          아래 설명된 대회 진행 방식과 기간 확인하시고 많은 신청바랍니다!<br />
          + 프로젝트 경험이 없거나 많지 않은 초보자분들을 위한 팀 또한 존재하니 많은 신청 부탁드립니다!
        </p>
        <div>
          지원하기!<br/>
          <ArrowImage src={`${process.env.PUBLIC_URL}/arrow.gif`} alt="Arrow GIF" />
        </div>
        <nav className="apply-button2">
          <a href="https://forms.gle/frCqsAu5SwFc1dLu7" target="_blank" rel="noopener noreferrer">
            Apply!
          </a>
        </nav>
      </Container>
    </section>
  );
};

export default Intro;

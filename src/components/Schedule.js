import React from 'react';
import '../App.css'; 

const Schedule = () => {
  return (
    <section id="schedule-section" className="schedule-box">
      <h2>CAPSthon 일정</h2>
      <div className="content">
        <h4>📆 대회 기간 (7/29 ~ 8/30)📆</h4>
        <p>
          - 랜덤 팀 발표 : 7.28<br/>
          - 기획서 제출 : 8.7<br/>
          - 최종 평가(온라인) : 8.30
        </p>
      </div>
    </section>
  );
}

export default Schedule;

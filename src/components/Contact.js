import React from 'react';
import '../App.css'; // 올바른 경로로 수정

const Contact = () => {
  return (
    <section id="contact-section">
      <h2>Contact</h2>
      <div className="contact-link">
        <p>
          <ul>
            <li>Address: <a href="https://maps.google.com/?q=Dongguk University E265, Seoul, South Korea">Dongguk University E265, Seoul, South Korea</a></li><br />
            <li><a href="https://www.instagram.com/caps_dongguk/">동국대학교 𝘾𝘼𝙋𝙎 Instagram</a></li><br />
            <li>CAPS gmail: <a href="mailto:caps.dongguk@gmail.com">caps.dongguk@gmail.com</a></li><br />
            혹은 사담방 문의 주세요 :)
          </ul>
        </p>
      </div>
    </section>
  );
}

export default Contact;

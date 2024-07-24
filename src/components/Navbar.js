import React from 'react';

const Navbar = ({ scrollToSection }) => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#intro" onClick={() => scrollToSection('intro-section')}>CAPSthon 소개</a>
        </li>
        <li>
          <a href="#schedule" onClick={() => scrollToSection('schedule-section')}>CAPSthon 일정</a>
        </li>
        <li>
          <a href="#guide" onClick={() => scrollToSection('guide-section')}>GUIDE</a>
        </li>
        <li>
          <a href="#faq" onClick={() => scrollToSection('faq-section')}>FAQ</a>
        </li>
        <li>
          <a href="#contact" onClick={() => scrollToSection('contact-section')}>Contact</a>
        </li>
        <li className="apply-button">
          <a href="https://forms.gle/frCqsAu5SwFc1dLu7" target="_blank" rel="noopener noreferrer">Apply!</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

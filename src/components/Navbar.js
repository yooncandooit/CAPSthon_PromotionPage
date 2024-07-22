import React from 'react';

const Navbar = ({ scrollToSection }) => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#intro" onClick={() => scrollToSection('intro')}>CAPSthon 소개</a>
        </li>
        <li>
          <a href="#schedule" onClick={() => scrollToSection('schedule')}>CAPSthon 일정</a>
        </li>
        <li>
          <a href="#guide" onClick={() => scrollToSection('guide')}>GUIDE</a>
        </li>
        <li>
          <a href="#faq" onClick={() => scrollToSection('faq')}>FAQ</a>
        </li>
        <li>
          <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

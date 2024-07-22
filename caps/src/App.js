import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Schedule from './components/Schedule';
import Guide from './components/Guide';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar scrollToSection={scrollToSection} />
      </header>
      <main>
        <Intro />
        <Schedule />
        <Guide />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
}

export default App;

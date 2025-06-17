import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import ContentWriting from './components/ContentWriting';
import Education from './components/Education';

import Documents from './components/Documents';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <ContentWriting />
      
      <Documents />
      <Contact />
    </div>
  );
}

export default App;

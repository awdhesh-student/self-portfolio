import './app.scss'

import Skills from './components/skills/Skills';
import Hero from './components/hero/Hero';
import NavBar from './components/navbar/NavBar';
import Parallax from './components/parallax/Parallax';
import Contact from './components/contact/Contact';
import Project from './components/projects/Project';
import About from './components/about/About';

const App = () => {
  return <>
    <section id='Home'>
      <NavBar />
      <Hero />
    </section>
    <section><Parallax type="about" /></section>
    <section id='About'><About /></section>
    <section><Parallax type="skills" /></section>
    <section id='Skills'><Skills /></section>
    <section><Parallax type="contact" /></section>
    <section id='Contact'><Contact /></section>
    <section><Parallax type="projects" /></section>
    <section id='Projects'><Project /></section>
  </>;
};

export default App;

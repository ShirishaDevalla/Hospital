import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Doctors from './components/Doctors';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
  return (
    <div className='App'>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="doctors">
        <Doctors />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;

import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About'
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {
  return (
    <div className='bg-[#0a192f]'>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;

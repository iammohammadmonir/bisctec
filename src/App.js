import About from './components/About';
import Hero from './components/Hero';
import Product from './components/Product';
import Projects from './components/Projects';
import Services from './components/Services';
import Technologie from './components/Technologie';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className='App'>
      <Hero />
      <About />
      <Product />
      <Services />
      <Projects />
      <Technologie />
      <Testimonials />
    </div>
  );
}

export default App;

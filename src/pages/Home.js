import About from '../components/About';
import Hero from '../components/Hero';
import Product from '../components/Product';
import Services from '../components/Services';
import Technologie from '../components/Technologie';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Product />
      <Services />
      <Projects />
      <Technologie />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;

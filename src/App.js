import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Intro from './Component/Intro/Intro';
import Services from './Component/Services/Services';
import Experience from './Component/Experience/Experience';
import Works from './Component/Works/Works';
import Portfolio from './Component/Portfolio/Portfolio';
import Testimonial from './Component/Testimonial/Testimonial';
import Contact from './Component/Contact/Contact';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Services/>
     <Experience/>
     <Works/>
     <Portfolio/>
     <Testimonial/>
     <Contact/>

    </div>
  );
}

export default App;

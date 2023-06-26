import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import JoinBar from './components/Join/JoinBar';
import Plan from './components/Plan/Plan';
import Reason from './components/Reason/Reason';
import Testimonial from './components/Testimonial/Testimonial';
import Program from './components/programs/Program';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Program/>
          <Reason/>
          <Plan/>
          <Testimonial/>
           <JoinBar/>
           <Footer/>
    </div>
  );
}

export default App;

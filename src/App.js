import './App.css';
import Hero from './component/hero/Hero';
import Programs from './component/Programs/Programs';
import Reasons from './component/Reasons/Reasons';
import Plans from './component/Plans/Plans';
import Testimonials from './component/Testimonials/Testimonials';
import Footer from './component/Footer/Footer';

function App() {
  console.log('hello')
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Reasons/>   
          <Plans/>
          <Testimonials/>

          <Footer/>
    </div>
  );
}

export default App;

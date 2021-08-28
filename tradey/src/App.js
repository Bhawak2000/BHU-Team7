
import './App.css';
import About from './Componenet/Dashboard/About';
import Carousel from './Componenet/Dashboard/Carousel';
import Companies from './Componenet/Dashboard/Companies';
import Footer from './Componenet/Layouts/Footer';
import Header from './Componenet/Layouts/Header';

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <About />
      <Companies />
      <Footer />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Testimonial from './component/Testimonial/Testimonial';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
}

export default App;

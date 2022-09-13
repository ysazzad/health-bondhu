import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Testimonial from './component/Testimonial/Testimonial';
import Faq from './component/Faq/Faq';
import Services from './component/Services/Services';
import Experience from './component/Experience/Experience';
import Feature from './component/Feature/Feature';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Services></Services>
      <Experience></Experience>
      <Feature></Feature>
      <Faq></Faq>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
}

export default App;

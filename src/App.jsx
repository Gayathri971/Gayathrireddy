import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Slider1 from "./components/Slider1";
import Slider2 from "./components/Slider2";
import Slider3 from "./components/Slider3";
import Slider4 from "./components/Slider4";
import Slide from "./components/Slide";
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"
import Card from "./components/Card"
import Offer from "./components/Offer";

export default function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Hero />
      <Slide />
      <Slider1 />
      <Slider2 />
      <Slider3 />
      <Slider4 />
      <Card/> 
      <Offer/>
      <Gallery/>
      <Footer/>
     
    </div>
  );
}

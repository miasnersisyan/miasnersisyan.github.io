import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import AboutUs from './pages/aboutUs/aboutUs';
import Contact from './pages/contact/contact';
import Gallery from './pages/gallery/gallery';
import Halls from './pages/halls/halls';
import Home from './pages/home/home';
import Menu from './pages/menu/menu';
import './assets/global.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GallerySlider from './components/gallerSlider/gallerySlider';

function App() {

  useEffect(() => {
    AOS.init();
  },[])

  return (
    <div className="App">
     
     <Header />
     <GallerySlider />
     <Routes>
      <Route path='/' element={ <Home />}></Route>
      <Route path='/halls' element={ <Halls />}></Route> 
      <Route path='/menu' element={ <Menu />}></Route> 
      <Route path='/gallery' element={ <Gallery />}></Route>  
      <Route path='/aboutUs' element={ <AboutUs />}></Route>
      <Route path='/contact' element={ <Contact />}></Route>
       </Routes>
     <Footer />
    </div>
  );
}

export default App;

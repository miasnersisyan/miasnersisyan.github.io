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
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeCheckSlice } from './redux/checkSlice';


function App() {
  const location = useLocation();
  
  const dispatch = useDispatch()
  AOS.init();
  useEffect(() => {
    
    if(location.pathname === '/'){
      dispatch(changeCheckSlice({
        halls : 'white',
        menu : 'white',
        gallery : 'white',
        about : 'white',
        contact : 'white'
    }))
    }else if(location.pathname === '/halls'){
      dispatch(changeCheckSlice({
        halls : 'gold',
        menu : 'white',
        gallery : 'white',
        about : 'white',
        contact : 'white'
    }))
    }else if(location.pathname === '/menu'){
      dispatch(changeCheckSlice({
        halls : 'white',
        menu : 'gold',
        gallery : 'white',
        about : 'white',
        contact : 'white'
    }))
    }else if(location.pathname === '/gallery'){
      dispatch(changeCheckSlice({
        halls : 'white',
        menu : 'white',
        gallery : 'gold',
        about : 'white',
        contact : 'white'
    }))
    }else if(location.pathname === '/aboutUs'){
      dispatch(changeCheckSlice({
        halls : 'white',
        menu : 'white',
        gallery : 'white',
        about : 'gold',
        contact : 'white'
    }))
    }else if(location.pathname === '/contact'){
      dispatch(changeCheckSlice({
        halls : 'white',
        menu : 'white',
        gallery : 'white',
        about : 'white',
        contact : 'gold'
    }))
    }
  },[location.pathname])

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




    // http://192.168.0.111:3000




  );
}

export default App;

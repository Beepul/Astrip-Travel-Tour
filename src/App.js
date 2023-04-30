import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Tour from './pages/tour/Tour';
import SingleTour from './pages/singleTour/SingleTour'
import Destination from './pages/destination/Destination';
import SingleDestination from './pages/singledestination/SingleDestination';
import Blogs from './pages/blog/Blogs';

import TopHeader from './components/TopHeader';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import FindFilter from './pages/findfilter/FindFilter';
import SingleBlog from './pages/singleblog/SingleBlog';
import Loader from './components/Loader';
import { useEffect, useState } from 'react';
import ScrollToTop from './components/ScrollToTop';


function App() {
  const [isLoading, setIsLoading] = useState(false);
    
  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <BrowserRouter> 
    {isLoading ?
    <Loader />
    :
    <div className="App">
      <ScrollToTop />
      <TopHeader />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tour' element={<Tour />} />
        <Route path='/tour/:id' element={<SingleTour />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/destination/:id' element={<SingleDestination />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:id' element={<SingleBlog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/findfilter' element={<FindFilter />} />
      </Routes>
      <Footer />
    </div>
  }
    </BrowserRouter>
  );
}

export default App;

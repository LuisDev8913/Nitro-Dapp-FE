// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Banner from './components/banner';
import Fashion from './components/fashion';
import Clothing from './components/clothing';
import About from './components/about';
import Roadmap from './components/roadmap';
import Footer from './components/footer';

function App() {
  return (
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path='/' />
    //   </Routes>
    // </BrowserRouter>
    <>
      <Header />
      <Banner />
      <Fashion />
      <Clothing />
      <About />
      <Roadmap />
      <Footer />
    </>
  );
}

export default App;

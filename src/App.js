import React from 'react';
import Navbar from './components/Navbar';
import Header from './container/Header';
import Blogs from './container/blog/Blogs'
import Social from './components/Social';
import Footer from './container/Footer/Footer'
// import Article from './components/Article'
import './App.css';



function App() {
  return (
   <div>
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
  
    <Blogs/>
    <Social/>
    <Footer/>
    
    
   </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home';
import NavBar from '../../components/Navbar/Navbar';
import Posts from '../Posts/Posts';
import Portfolio from '../Portfolio/Portfolio';
import Me from '../../components/Me/Me';
import Footer from '../../components/Footer/Footer';
import "./App.css"


const App = ()=> {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/me" element={<Me />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

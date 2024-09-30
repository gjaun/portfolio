import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';

/*
File Name: MainRouter.jsx 
Student Name: Gichul Jaun
Student ID: 301375948
Course: COMP229-408
Date: October 1, 2024
*/

function MainRouter() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/portfolio/" element={<Home />} />
        <Route exact path="/portfolio/about" element={<About />} />
        <Route exact path="/portfolio/projects" element={<Projects />} />
        <Route exact path="/portfolio/services" element={<Services />} />
        <Route exact path="/portfolio/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default MainRouter;

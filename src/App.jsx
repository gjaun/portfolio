import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './MainRouter';
import './App.css';

/*
File Name: App.jsx 
Student Name: Gichul Jaun
Student ID: 301375948
Course: COMP229-408
Date: October 1, 2024
*/

function App() {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
}

export default App;

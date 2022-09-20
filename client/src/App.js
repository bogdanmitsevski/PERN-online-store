import React, { Component }  from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/navBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <AppRouter />
    </BrowserRouter>
  );
}

export default App;

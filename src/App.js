import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import NavBar from './components/Navbar';
import Carousel from './components/Carousel';


function App() {


  

  return (
    <div className="App">
    <NavBar></NavBar>
    <Carousel></Carousel>
    </div>

  );
}

export default App;

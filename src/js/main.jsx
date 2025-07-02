import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import NavBar  from './components/Navbar';  
import Jumbotron from './components/Jumbotron';
import Cards from './components/Cards';
import Footer from './components/Footer';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Jumbotron />
    <Cards />
    <Footer />

    
  </React.StrictMode>,
)

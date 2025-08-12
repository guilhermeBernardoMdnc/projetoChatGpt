import { useState } from 'react'
import './App.css'
import NavBar from '../components/NavBar'
import Container from '../components/container'
import Cards from '../components/Sobre'
import Form from '../components/Form'
import Footer from '../components/Footer'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {

  return (
    <>
      <div>
        
        <Router>
        <NavBar />
        <Container />
        <Cards />
        <Form />
        <Footer />
        
        </Router>

      </div>
      
    </>
  )
}

export default App

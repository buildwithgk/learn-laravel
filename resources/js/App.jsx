// // resources/js/App.jsx
import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './react-layouts/Header';
import Footer from './react-layouts/Footer';
import Index from './react-components/Index';
import About from './react-components/About';
import Service from './react-components/Service';
import Project from './react-components/Project';
import Contact from './react-components/Contact';
import Team from './react-components/pages/Team';
import Blog from './react-components/pages/Blog';
import Client from './react-components/pages/Client';

export default function App(){
    return(
         <Router>
            <Header />
             <Routes>
                <Route path="/" exact element={<Index />} />
                <Route path="/about" exact element={<About />} />
                <Route path="/service" exact element={<Service />} />
                <Route path="/project" exact element={<Project />} />
                <Route path="/contact" exact element={<Contact />} />
              </Routes>
            <Footer /> 
        </Router>
    );
}

if(document.getElementById('root')){
    createRoot(document.getElementById('root')).render(<App />)
}

// resources/js/App.jsx

// // resources/js/App.jsx
import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './Index';
import About from './About';

export default function App(){
    return(
         <Router>
             <Routes>
                <Route path="/" exact element={<Index />} />
                <Route path="/about" exact element={<About />} />
              </Routes>
        </Router>
    );
}

if(document.getElementById('root')){
    createRoot(document.getElementById('root')).render(<App />)
}

// resources/js/App.jsx

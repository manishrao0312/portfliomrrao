// --- FILE: src/main.jsx (or index.js) ---
import React from 'react'
import ReactDOM from 'react-dom/client'
// 1. Import BrowserRouter, Routes, and Route
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

// 2. Import your page components
import App from './App.jsx' // Your homepage
import Projects from './Projects.jsx' // Your new projects page

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* 3. Define your Routes here */}
      <Routes>
        {/* When path is "/", load App.jsx */}
        <Route path="/" element={<App />} />
        
        {/* When path is "/projects", load Projects.jsx */}
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
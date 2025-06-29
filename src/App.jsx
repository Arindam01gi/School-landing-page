import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { useState } from 'react';
import Home from "./components/Home";
import './App.css'
import LogoAnimation from './components/LogoAnimation';
import './LogoAnimation.module.css'


function App() {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <>
      {!animationComplete ? (
        <LogoAnimation onComplete={() => setAnimationComplete(true)} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      )}
    </>
  )
}

export default App

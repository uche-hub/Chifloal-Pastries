import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Hero } from './component/Hero';
import { GlobalStyle } from './globalStyle';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    Aos.init({})
  }, [])

  return (
    <Router>
      <GlobalStyle />
      <Hero />
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import UnitConverter from './components/UnitConverter';
import BaseConverter from './components/BaseConverter';
import TextConverter from './components/TextConverter';
import './App.css';

function App() {
  return (
    <Router>
      <div className="wizarding-theme">
        <header className="wizard-header">
          <h1>Allconverters</h1>
          <Nav className="converter-nav">
            <Nav.Link as={Link} to="/units">Units</Nav.Link>
            <Nav.Link as={Link} to="/bases">Number Bases</Nav.Link>
            <Nav.Link as={Link} to="/text">Text Formats</Nav.Link>
          </Nav>
        </header>
        <Container className="mt-5">
          <Routes>
            <Route path="/units" element={<UnitConverter />} />
            <Route path="/bases" element={<BaseConverter />} />
            <Route path="/text" element={<TextConverter />} />
            <Route path="/" element={<UnitConverter />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Profile from './profile';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={
          <div>
            <header>
              <h1>Welcome to My Website</h1>
              <p>Mene banai hai.</p>
            </header>

            <main>
              <section>
                <h2>About Me</h2>
                <p>Me nahi Bataungaaaa....</p>
              </section>

              <section>
                <h2>Projects</h2>
                <ul>
                  <li>Yaad nahi hai</li>
                  <li>Data Converter (Soch raha hu)</li>
                  <li>Portfolio (Coming Soon)</li>
                </ul>
              </section>

              <section>
                <h2>Contact</h2>
                <p>Email: abhishekkijayho@God.com</p>
              </section>
            </main>
          </div>
        } />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
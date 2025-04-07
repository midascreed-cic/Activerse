import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Events } from './pages/Events';
import { Community } from './pages/Community';
import { Impact } from './pages/Impact';
import { Activities } from './components/Activities';
import { NFTCollection } from './components/NFTCollection';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/community" element={<Community />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/collection" element={<NFTCollection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
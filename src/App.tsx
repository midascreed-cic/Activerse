import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Events } from './pages/Events';
import { Community } from './pages/Community';
import { Impact } from './pages/Impact';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Activities } from './features/Activities';
import { NFTCollection } from './features/nft/NFTCollection';
import { QRScanner } from './features/qr/QRScanner';
import { Web3Provider } from './contexts/Web3Context';

function App() {
  return (
    <Web3Provider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/community" element={<Community />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/nft-collection" element={<NFTCollection />} />
              <Route path="/collection" element={<NFTCollection />} />
              <Route path="/qr-scanner" element={<QRScanner />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Web3Provider>
  );
}

export default App;
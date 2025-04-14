import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Events } from './pages/Events';
import { Community } from './pages/Community';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Activities } from './features/Activities';
import { NFTCollection } from './features/nft/NFTCollection';
import { QRScannerPage } from './pages/QRScanner';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { Web3Provider } from './contexts/Web3Context';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <Web3Provider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/community" element={<Community />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/nft-collection" element={<NFTCollection />} />
              <Route path="/collection" element={<NFTCollection />} />
              <Route path="/qr-scanner" element={<QRScannerPage />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Web3Provider>
  );
}

export default App;
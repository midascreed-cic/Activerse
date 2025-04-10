import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-emerald-400">Home</Link></li>
              <li><Link to="/events" className="hover:text-emerald-400">Events</Link></li>
              <li><Link to="/community" className="hover:text-emerald-400">Community</Link></li>
              <li><Link to="/impact" className="hover:text-emerald-400">Impact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>info@activerse.org</li>
              <li>+265 999 999 999</li>
              <li>Lilongwe, Malawi</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="hover:text-emerald-400">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-emerald-400">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ActiVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 
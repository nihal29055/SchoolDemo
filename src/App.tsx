import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { School, Menu, X } from 'lucide-react';
import Home from './pages/Home';
import Academics from './pages/Academics';
import ClubsActivities from './pages/ClubsActivities';
import Alumni from './pages/Alumni';
import Campus from './pages/Campus';
import Admissions from './pages/Admissions';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <School className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-800">Saint Joseph's College</span>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-500 hover:text-gray-600"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/academics">Academics</NavLink>
                <NavLink to="/clubs">Clubs & Activities</NavLink>
                <NavLink to="/campus">Campus Life</NavLink>
                <NavLink to="/alumni">Alumni</NavLink>
                <NavLink to="/admissions">Admissions</NavLink>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden pb-4">
                <div className="flex flex-col space-y-2">
                  <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
                  <MobileNavLink to="/academics" onClick={() => setIsMenuOpen(false)}>Academics</MobileNavLink>
                  <MobileNavLink to="/clubs" onClick={() => setIsMenuOpen(false)}>Clubs & Activities</MobileNavLink>
                  <MobileNavLink to="/campus" onClick={() => setIsMenuOpen(false)}>Campus Life</MobileNavLink>
                  <MobileNavLink to="/alumni" onClick={() => setIsMenuOpen(false)}>Alumni</MobileNavLink>
                  <MobileNavLink to="/admissions" onClick={() => setIsMenuOpen(false)}>Admissions</MobileNavLink>
                </div>
              </div>
            )}
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/clubs" element={<ClubsActivities />} />
            <Route path="/campus" element={<Campus />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/admissions" element={<Admissions />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`${
        isActive
          ? 'text-blue-600 border-b-2 border-blue-600'
          : 'text-gray-600 hover:text-blue-600'
      } py-5 font-medium transition-colors duration-200`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`${
        isActive
          ? 'text-blue-600 bg-blue-50'
          : 'text-gray-600 hover:bg-gray-50'
      } block px-4 py-2 rounded-md font-medium transition-colors duration-200`}
    >
      {children}
    </Link>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <School className="h-6 w-6" />
              <span className="text-lg font-bold">Saint Joseph's College</span>
            </div>
            <p className="text-gray-400">
              Empowering minds, shaping futures since 1950.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/academics" className="hover:text-white">Academics</Link></li>
              <li><Link to="/clubs" className="hover:text-white">Clubs & Activities</Link></li>
              <li><Link to="/admissions" className="hover:text-white">Admissions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>info@stjosephs.edu</li>
              <li>+1 (555) 123-4567</li>
              <li>123 College Avenue, City</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Saint Joseph's College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default App;
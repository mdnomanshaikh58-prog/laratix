import { Link, Outlet, useLocation } from 'react-router-dom';
import { Mail, Menu, MessageCircle, Phone, Search, User, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { agencyContact, agencyContactLinks } from '@/data/contact';

export default function RootLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check authentication status
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  }, [location]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Process', href: '/process' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">
                Laratix <span className="text-[#0CB35D]">Lab</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-[#0CB35D]'
                      : 'text-gray-700 hover:text-[#0CB35D]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/services#service-search"
                className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-[#0CB35D] hover:text-[#0CB35D]"
              >
                <Search size={16} />
                <span>Search</span>
              </Link>
              {isAuthenticated ? (
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 bg-white border-2 border-[#0CB35D] text-[#0CB35D] px-5 py-2 rounded-full text-sm font-medium hover:bg-green-50 transition-colors"
                >
                  <User size={18} />
                  <span>Dashboard</span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-2 bg-white border-2 border-gray-300 text-gray-700 px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
                >
                  <User size={18} />
                  <span>Sign In</span>
                </Link>
              )}
              <Link
                to="/contact"
                className="bg-[#0CB35D] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#0a9d4f] transition-colors"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <Link
                to="/services#service-search"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <Search size={18} />
                <span>Search Services</span>
              </Link>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-[#0CB35D] bg-gray-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              {isAuthenticated ? (
                <Link
                  to="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 mx-4 mt-4 text-center border-2 border-[#0CB35D] text-[#0CB35D] px-6 py-3 rounded-full text-sm font-medium hover:bg-green-50 transition-colors"
                >
                  <User size={20} />
                  <span>Dashboard</span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 mx-4 mt-4 text-center border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
                >
                  <User size={20} />
                  <span>Sign In</span>
                </Link>
              )}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block mx-4 mt-4 text-center bg-[#0CB35D] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#0a9d4f] transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                Laratix <span className="text-[#0CB35D]">Lab</span>
              </h3>
              <p className="text-gray-400 mb-4">
                Websites, business solutions, and academic support built with
                clarity.
              </p>
              <p className="text-gray-400 text-sm">
                (c) 2026 Laratix Lab. All rights reserved.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigation.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-400 hover:text-[#0CB35D] transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Web Development</li>
                <li>Business Insights</li>
                <li>Academic Support</li>
                <li>Data Analysis</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href={agencyContactLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 transition-colors hover:text-[#0CB35D]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </a>
                </li>
                <li>
                  <a
                    href={agencyContactLinks.phone}
                    className="flex items-center gap-2 text-gray-400 transition-colors hover:text-[#0CB35D]"
                  >
                    <Phone className="h-4 w-4" />
                    <span>{agencyContact.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={agencyContactLinks.email}
                    className="flex items-center gap-2 text-gray-400 transition-colors hover:text-[#0CB35D]"
                  >
                    <Mail className="h-4 w-4" />
                    <span>{agencyContact.email}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky CTA Button */}
      <a
        href={agencyContactLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#0CB35D] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#0a9d4f] transition-all hover:scale-105 z-40 font-medium text-sm"
      >
        WhatsApp Us
      </a>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Clock, MapPin, Facebook, Instagram } from 'lucide-react';
import { RoutePath } from '../types';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'O nás', path: RoutePath.ABOUT },
    { name: 'Služby', path: RoutePath.SERVICES },
    { name: 'Akutní', path: RoutePath.EMERGENCY, special: true },
    { name: 'Provoz', path: RoutePath.INFO },
    { name: 'Tým', path: RoutePath.TEAM },
    { name: 'Ceník', path: RoutePath.PRICING },
    { name: 'FAQ', path: RoutePath.FAQ },
    { name: 'Kontakt', path: RoutePath.CONTACT },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Top Bar - Hidden on small mobile */}
      <div className="bg-primary-900 text-primary-50 py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2"><MapPin size={14} /> Komenského 10, Slavičín</span>
            <span className="flex items-center gap-2"><Phone size={14} /> +420 771 167 069</span>
            <span className="flex items-center gap-2"><Clock size={14} /> Po-Čt 7-15, Pá 7-12</span>
          </div>
          <div className="flex space-x-4">
             <a href="#" className="hover:text-white transition"><Facebook size={16} /></a>
             <a href="#" className="hover:text-white transition"><Instagram size={16} /></a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <NavLink to={RoutePath.HOME} className="flex flex-col">
               <span className="text-2xl font-serif font-bold text-primary-800 tracking-tight">BEFANY</span>
               <span className="text-xs text-primary-600 uppercase tracking-widest">Dentální studio</span>
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-6 items-center">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-200 ${
                      item.special ? 'text-red-600 hover:text-red-700 font-bold' : 
                      isActive ? 'text-primary-700 font-semibold' : 'text-slate-600 hover:text-primary-700'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <NavLink to={RoutePath.CONTACT}>
                <button className="bg-primary-800 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary-900 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Objednat se
                </button>
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-slate-600 hover:text-primary-800 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <NavLink to={RoutePath.HOME} className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-primary-800 hover:bg-slate-50">
                Domů
              </NavLink>
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-md text-base font-medium ${
                      item.special ? 'text-red-600 hover:bg-red-50' :
                      isActive ? 'bg-primary-50 text-primary-900' : 'text-slate-700 hover:text-primary-800 hover:bg-slate-50'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-serif text-white mb-4">BEFANY</h3>
            <p className="text-sm leading-relaxed mb-4">
              Komplexní stomatologická péče s důrazem na bezbolestnost a individuální přístup v centru Slavičína.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Rychlé odkazy</h4>
            <ul className="space-y-2 text-sm">
              <li><NavLink to={RoutePath.ABOUT} className="hover:text-white transition">O nás</NavLink></li>
              <li><NavLink to={RoutePath.SERVICES} className="hover:text-white transition">Služby</NavLink></li>
              <li><NavLink to={RoutePath.TEAM} className="hover:text-white transition">Náš tým</NavLink></li>
              <li><NavLink to={RoutePath.EMERGENCY} className="text-red-400 hover:text-red-300 transition">Akutní stavy</NavLink></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Komenského 10 (4. patro)<br />763 21 Slavičín</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+420771167069" className="hover:text-white">+420 771 167 069</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold">@</span>
                <a href="mailto:info@befany.cz" className="hover:text-white">info@befany.cz</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Ordinační hodiny</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between"><span>Pondělí - Středa</span> <span>7:00 - 15:00</span></li>
              <li className="flex justify-between"><span>Čtvrtek</span> <span>7:00 - 15:00</span></li>
              <li className="flex justify-between"><span>Pátek</span> <span>7:00 - 12:00</span></li>
              <li className="flex justify-between text-slate-500 italic mt-2"><span>Víkendy</span> <span>Zavřeno</span></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Dentální studio Befany. Všechna práva vyhrazena.</p>
        </div>
      </footer>
    </div>
  );
};
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Emergency } from './pages/Emergency';
import { Info } from './pages/Info';
import { Team } from './pages/Team';
import { Pricing } from './pages/Pricing';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { RoutePath } from './types';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path={RoutePath.HOME} element={<Home />} />
          <Route path={RoutePath.ABOUT} element={<About />} />
          <Route path={RoutePath.SERVICES} element={<Services />} />
          <Route path={RoutePath.EMERGENCY} element={<Emergency />} />
          <Route path={RoutePath.INFO} element={<Info />} />
          <Route path={RoutePath.TEAM} element={<Team />} />
          <Route path={RoutePath.PRICING} element={<Pricing />} />
          <Route path={RoutePath.FAQ} element={<FAQ />} />
          <Route path={RoutePath.CONTACT} element={<Contact />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
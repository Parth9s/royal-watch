import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Hero />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        
      </Routes>
    </Router>
  );
}

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      

    </>
  );
};

export default App;
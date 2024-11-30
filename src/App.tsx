import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Background from './components/Background';
import Footer from './components/Footer';
import CreateBasket from './pages/CreateBasket';
import ExploreBaskets from './pages/ExploreBaskets';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <Background />
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
            </>
          } />
          <Route path="/create-basket" element={<CreateBasket />} />
          <Route path="/explore" element={<ExploreBaskets />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
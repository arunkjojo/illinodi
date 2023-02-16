import React from 'react';
import './css/App.css';
import './css/mediaQuery.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { HomeBody } from './pages/home';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Body */}
      <HomeBody />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// Css
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/css/App.css';
import './assets/css/custom.css';

// Components
import HeaderComponent from './components/common/Header';
import FooterComponent from './components/common/Footer';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';


const App: FC = () => {

  return (
    <BrowserRouter>
      <div className="App">

        <HeaderComponent />

        <Container fluid className='home-container'>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route index path="/home" element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route index path="*" element={<HomePage />} />
          </Routes>

        </Container>


        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}
export default App;
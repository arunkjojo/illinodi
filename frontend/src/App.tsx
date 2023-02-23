import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Css
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './css/mediaQuery.css';


// Components
import HeaderComponent from './components/common/Header';
import FooterComponent from './components/common/Footer';

// Pages
import HomePage from './pages/HomePage';
import PaymentPage from './pages/PaymentPage';
import LoginPage from './pages/LoginPage';
import ItemDetails from './pages/ItemDetails';
// const HomePage = lazy(() => import('./pages/HomePage'));


const App: FC = () => {

  return (
    <BrowserRouter>
      <div className="App">
        {/* Header */}
        <HeaderComponent />
        {/* Body */}

        {/* <Application /> */}

        <Routes >
          <Route index path="/" element={<HomePage />} />
          <Route index path="/home" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="item-details" element={<ItemDetails />} />
          <Route index path="*" element={<HomePage />} />
        </Routes>

        {/* Footer */}
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}
export default App;
import React, { FC, lazy } from 'react'
import { Routes, Route } from "react-router-dom";
import { AppRouterProps } from '../interfaces'

const HomePage = lazy(() => import('../../pages/HomePage'));
const PaymentPage = lazy(() => import('../../pages/PaymentPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));

const AppRouter: FC<AppRouterProps> = (props) => {
  return (
    <Routes >
      <Route index path="/" element={<HomePage />} />
      <Route index path="/home" element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="payment" element={<PaymentPage />} />
      <Route index path="*" element={<HomePage />} />
    </Routes>
  )
}
export default AppRouter;
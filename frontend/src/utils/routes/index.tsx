import React, {FC, lazy} from 'react'
import { Routes, Route } from "react-router-dom";
import { AppRouterProps } from '../interfaces'

const HomePage = lazy(() => import('../../pages/home'));
const PaymentPage = lazy(() => import('../../pages/payment'));
const LoginPage = lazy(() => import('../../pages/login'));

const AppRouter:FC<AppRouterProps> = (props) => {
  return (
    <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="*" element={<HomePage />} />
    </Routes>
  )
}
export default AppRouter;
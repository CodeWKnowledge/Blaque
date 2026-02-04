import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import Layout from './layout/Layout';
import AdminLayout from './layout/AdminLayout';
import LandingPage from './pages/LandingPage';
import ShopPage from './pages/ShopPage';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AdminOverview from './pages/Admin/AdminOverview';
import AdminProducts from './pages/Admin/AdminProducts';
import AdminContent from './pages/Admin/AdminContent';
import AdminOrders from './pages/Admin/AdminOrders';
import { ShopProvider } from './context/ShopContext';
import { AdminProvider } from './context/AdminContext';

function App() {
  return (
    <AdminProvider>
      <ShopProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Public Routes with Main Layout */}
            <Route path="/" element={<Layout><LandingPage /></Layout>} />
            <Route path="/shop" element={<Layout><ShopPage /></Layout>} />
            <Route path="/product/:id" element={<Layout><ProductDetail /></Layout>} />
            <Route path="/cart" element={<Layout><CartPage /></Layout>} />
            <Route path="/checkout" element={<Layout><CheckoutPage /></Layout>} />

            {/* Admin Routes with Admin Layout */}
            <Route path="/admin" element={<AdminLayout><AdminOverview /></AdminLayout>} />
            <Route path="/admin/products" element={<AdminLayout><AdminProducts /></AdminLayout>} />
            <Route path="/admin/content" element={<AdminLayout><AdminContent /></AdminLayout>} />
            <Route path="/admin/orders" element={<AdminLayout><AdminOrders /></AdminLayout>} />
          </Routes>
        </Router>
      </ShopProvider>
    </AdminProvider>
  );
}

export default App;

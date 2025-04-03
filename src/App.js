import React from 'react';
import './App.css';
import Login from './pages/login/Login';
import Produtos from './pages/home/Produtos';
import { Route, BrowserRouter as Router, Routes } from 'react-router';
import Roupas from './pages/roupas/Roupas';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={
          <Layout>
            <Produtos />
          </Layout>
        } />
        <Route path='/roupas' element={
          <Layout>
            <Roupas />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;

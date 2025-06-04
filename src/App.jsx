import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './Components/Login';
import Profile from './Components/Profile';
import Register from './Components/Register';
import Home from './Components/Home';
import InfoOngs from './Components/infoOngs';

const App = () => {
  // Função para verificar se usuário está logado
  const isLoggedIn = () => !!localStorage.getItem('token');

  // Componente para proteger rotas privadas
  const ProtectedRoute = ({ children }) => {
    if (!isLoggedIn()) {
      toast.warn("Você precisa estar logado para acessar esta página.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <>
      <Router>
        <Routes>
          {/* Rota raiz: redireciona baseado em login */}
          <Route
            path="/"
            element={
              isLoggedIn() ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />
            }
          />

          {/* Rotas públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Rotas privadas */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ong/:id"
            element={
              <ProtectedRoute>
                <InfoOngs />
              </ProtectedRoute>
            }
          />

          {/* Rota fallback para qualquer rota não mapeada */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>

      <ToastContainer />
    </>
  );
};

export default App;

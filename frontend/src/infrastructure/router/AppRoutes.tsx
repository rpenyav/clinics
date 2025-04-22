import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Dashboard,
  Login,
  Settings,
  Documentation,
  NotFound,
} from "../../presentation/pages";
import { Layout } from "../../presentation/layout";
import { ProtectedRoute } from "..";

const AppRoutes: React.FC = () => {
  const isAuthenticated = true;

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/settings"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Layout>
              <Settings />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/documentation"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Layout>
              <Documentation />
            </Layout>
          </ProtectedRoute>
        }
      />
      {/* Ruta para manejar páginas no encontradas (404) */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

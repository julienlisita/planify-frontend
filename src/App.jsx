import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/appRoutes';
import MainLayout from './components/layout/MainLayout';
import { AuthProvider } from './context/AuthContext';

function App() {
  return  (
    <AuthProvider> 
      <Router>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
    </Router>
  </AuthProvider>
  );  
}

export default App

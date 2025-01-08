import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/appRoutes';
import MainLayout from './components/layout/MainLayout';

function App() {
  return  (
    <Router>
    <MainLayout>
      <AppRoutes />
    </MainLayout>
  </Router>
  );  
}

export default App

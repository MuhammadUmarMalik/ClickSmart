import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <MainLayout>
        <LandingPage />
      </MainLayout>
    </Router>
  );
}

export default App;

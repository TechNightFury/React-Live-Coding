import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes path='/' element={Layout}>
        <Route path='/' />
        <Route path='/' />
        <Route path='/' />
      </Routes>
    </Router>
  );
}

export default App;

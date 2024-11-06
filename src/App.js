import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import Counter from './pages/Counter';
import Toggle from './pages/Toggle';
import Todos from './pages/Todos';
import DataFetcher from './pages/DataFetcher';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='counter' element={<Counter />} />
        <Route path='toggle' element={<Toggle />} />
        <Route path='todos' element={<Todos />} />
        <Route path='data-fetch' element={<DataFetcher />} />
      </Routes>
    </Router>
  );
}

export default App;

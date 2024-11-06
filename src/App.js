import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import Counter from './pages/Counter';
import Toggle from './pages/Toggle';
import Todos from './pages/Todos';
import DataFetcher from './pages/DataFetcher';
import Searchbar from './pages/Searchbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='counter' element={<Counter />} />
        <Route path='toggle' element={<Toggle />} />
        <Route path='todos' element={<Todos />} />
        <Route path='data-fetch' element={<DataFetcher />} />
        <Route path='searchbar' element={<Searchbar />} />
      </Routes>
    </Router>
  );
}

export default App;

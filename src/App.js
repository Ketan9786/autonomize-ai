// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RepositoryListPage from './components/RepositoryListPage';
import RepositoryDetailsPage from './components/RepositoryDetailsPage';
import Followers from './components/Followers';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/repositories" element={<RepositoryListPage/>} />
        <Route path="repository/:repositoryId" element={<RepositoryDetailsPage/>} />
        <Route path="/followers" element={<Followers/>} />
      
      </Routes>
    </Router>
  );
}

export default App;

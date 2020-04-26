import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebars from './Component/Sidebar';

function App() {
  return (
    <Router>
      <Sidebars />
    </Router>
  );
}

export default App;

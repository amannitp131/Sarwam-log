import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Management from './pages/Management.jsx';
import Auth from './pages/Auth.jsx';
import Dashboard from './pages/Dashboard.jsx';

function App() {
    return (
        <Router>  {/* Ensure Router wraps the Routes component */}
        <div>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/management" element={<Management />} />
            <Route path="/register" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
           
          </Routes>
        </div>
      </Router>
    );
}

export default App;

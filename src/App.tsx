import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Center from './Components/Center';
import ShowCenters from './Components/ShowCenter';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowCenters />} />
        <Route path="/center/:centerID"  />
      </Routes>
    </Router>
  );
}

export default App;

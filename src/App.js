import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import T1 from './pages/templates/template_1';
import T2 from './pages/templates/template_2';
import T3 from './pages/templates/template_3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/template_1" element={<T1 />} />
        <Route path="/template_2" element={<T2 />} />
        <Route path="/template_3" element={<T3 />} />
      </Routes>
    </Router>
  );
}
  
  export default App;
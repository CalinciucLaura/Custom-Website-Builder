import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import T1 from './pages/templates/template_1';
import T2 from './pages/templates/template_2';
import T3 from './pages/templates/template_3';
import heroImage from './assets/images/1.jpg';
import descriptionImage1 from './assets/images/2.jpg';
import descriptionImage2 from './assets/images/4.jpg';
import descriptionImage3 from './assets/images/10.jpg';
import descriptionImage4 from './assets/images/7.jpg';
import descriptionImage5 from './assets/images/8.jpg';
import descriptionImage6 from './assets/images/9.jpg';


function App() {
 
const imageList = [heroImage, descriptionImage1, descriptionImage2, descriptionImage3, descriptionImage4, descriptionImage5, descriptionImage6]

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/template_1" element={<T1 images={imageList}/>} />
        {/* <Route path="/template_2" element={<T2 />} />
        <Route path="/template_3" element={<T3 />} />  */}
      </Routes>
    </Router>
  );
}
  
  export default App;
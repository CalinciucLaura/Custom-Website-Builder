import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/Homepage';
import T1 from './pages/templates/template_1';
import T2 from './pages/templates/template_2';
import T3 from './pages/templates/template_3';
import MainPage from './pages/MainPage';
import Portfolio from './pages/portfolio/Portfolio';
import PortfolioPage2 from './pages/portfolio/PortfolioPage2';
import PortfolioPage3 from './pages/portfolio/PortfolioPage3';
import PortfolioPage4 from './pages/portfolio/PortfolioPage4';
import ColorSelector from './pages/portfolio/ColorSelector';
import { TemplateGenerator } from './pages/portfolio/templates/Template';
import Profile from './pages/Profile';
import Website from './pages/portfolio/templates/Website';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
    <Router>
      <Routes>        
        <Route path={`/`} element={<MainPage />} />
        <Route path={`/template_1/:user_id`} element={<T1 /> }/>
        <Route path={`/template_2/:user_id`} element={<T2 /> }/>
        <Route path={`/template_3/:user_id`} element={<T3 /> }/>
        <Route path={'/generator'} element={<HomePage />} />
        <Route path={`/portfolio/`} element={<Portfolio />} />
        <Route path={'/portfolio/experience_education/'} element={<PortfolioPage2 />} />
        <Route path={'/portfolio/skills/'} element={<PortfolioPage3 />} />
        <Route path={'/portfolio/projects/'} element={<PortfolioPage4 />} />
        <Route path={'/portfolio/color/'} element={<ColorSelector />} />
        <Route path={`/portfolio/template/preview`} element={<Website />} />
        <Route path={`/profile/`} element={<Profile />} />
        <Route path={`/portfolio/template/`} element={<TemplateGenerator />} />
      
      </Routes>
    </Router>
    </RecoilRoot>
  );
}
  
  export default App;
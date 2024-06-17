import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/Homepage';
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
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from './pages/user_session_state';
import AIWebsite from './pages/AIWebsite';
import Shop from './pages/shop/Shop';
import Products from './pages/shop/Products';
import Page from './pages/shop/Page';
import AddImages from './pages/shop/AddImages';

function App() {
  return (
    <RecoilRoot>
      <AppBlock />
    </RecoilRoot>
  );
}

const AppBlock = () => {
  useEffect(() => {
    setUser_id(window.localStorage.getItem('user_id') ?? '');
  },[]);
  const [user_id, setUser_id] = useRecoilState(userState);

  return (
    <Router>
      <Routes>        
        <Route path={`/`} element={<MainPage />} />
        <Route path={`/shop/`} element={<Shop />} />
        <Route path={`/shop/products/`} element={<Products />} />
        <Route path={`/shop/images/`} element={<AddImages />} />
        <Route path={`/shop/website`} element={<Page />} />
        <Route path={'/generator/preview/:id'} element={<AIWebsite />} />
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
  );
}
  
export default App;
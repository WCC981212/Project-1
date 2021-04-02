import './css/index.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfoliosPage from './pages/PortfoliosPage';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';
import { useState } from 'react';

function App() {
  const [navToggle, setNavToggle] = useState(false);
  const navClick = () => {
    setNavToggle(!navToggle);
  };
  return (
    <div className='App'>
      <div className={`sidebar ${navToggle ? 'nav-toggle':''}`}>
        <NavBar />
      </div>
      <div className='nav-btn' onClick={navClick}>
        <div className='line-1'></div>
        <div className='line-2'></div>
        <div className='line-3'></div>
      </div>
      <div className='main-content'>
        <div className='content'>
          <Switch>
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path='/about' exact>
              <AboutPage />
            </Route>
            <Route path='/portfolios' exact>
              <PortfoliosPage />
            </Route>
            <Route path='/blogs' exact>
              <BlogsPage />
            </Route>
            <Route path='/contact' exact>
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;

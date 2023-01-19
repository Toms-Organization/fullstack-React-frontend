import './index.css';
import './App.css';

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import NewsPage from './pages/NewsPage';
import BlogPage from './pages/BlogPage';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/News" element={<NewsPage />} />
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/Login" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

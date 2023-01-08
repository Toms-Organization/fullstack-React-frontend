import './index.css';
import './App.css';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import LoginPage from './components/LoginPage';
import NewsPage from './components/NewsPage';

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
          <Route path="/Login" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

//<Login />
// <Profile />
// <TomsSideBar className="justify-start" />;
// <HomePage className="justify-start" />
// <testComponent1></testComponent1>

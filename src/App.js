import './index.css';
import './App.css';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Profile from './components/Profile';
import LoginPage from './components/LoginPage';

import { Route, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
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

import './index.css';

import './App.css';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <div>
      <NavBar />
      <Profile />
      <Login />
    </div>
  );
}

export default App;

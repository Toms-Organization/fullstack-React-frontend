import './index.css';

import './App.css';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Profile from './components/Profile';
import HomePage from './components/HomePage';

function App() {
  const test = { name: 'Tom', age: 30 };

  return (
    <div>
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;

//<Login />
// <Profile />;

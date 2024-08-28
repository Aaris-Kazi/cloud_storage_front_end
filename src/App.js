
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import './App.css';

import { Route, Routes } from 'react-router-dom';
import LandinPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import { Home } from './pages/Home';
function App() {

  return (
    <Routes>
      <Route index element={<LandinPage />} />
      <Route path='login/' element={<LoginPage />} />
      <Route path='register/' element={<Register />} />
      <Route path='home/' element={<Home />} />
    </Routes>

  );
}

export default App;

import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import AboutPage from '../AboutPage/AboutPage';
import { getUser } from '../../utilities/users-service';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser}/>
            <Routes>
              {/* Route components in here */}
              <Route path="/about" element={<AboutPage />} />
              {/* <Route path="/orders" element={<OrderHistoryPage />} /> */}
              <Route path="/*" element={<Navigate to="/home" />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

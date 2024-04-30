import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";
import HomePage from "../HomePage/HomePage";
import RetreatsListPage from "../RetreatsListPage/RetreatsListPage";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
            <HomePage />
      {user ? (
        <>
          <Routes>
            
            {/* Route components in here */}
            <Route path="/retreats/:catalogName" element={<RetreatsListPage />} />
            <Route path="/*" element={<Navigate to="/catalog" />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

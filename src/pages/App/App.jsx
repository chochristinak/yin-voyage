import "./App.css";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";
import HomePage from "../HomePage/HomePage";
import RetreatsListPage from "../RetreatsListPage/RetreatsListPage";
import RetreatDetailsPage from "../RetreatDetailsPage/RetreatDetailsPage";
import BookingHistoryPage from "../BookingHistoryPage/BookingHistoryPage";

export default function App() {
  const [user, setUser] = useState(getUser());
  const Navigate = useNavigate();

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/catalogs" element={<HomePage />} />
            <Route path="/retreats" element={<RetreatsListPage />} />
            <Route path="/retreats/:id" element={<RetreatDetailsPage />} />
            <Route path="/bookings" element={<BookingHistoryPage />} />

            {/* <Route path="/*" element={<Navigate to="/catalogs" />} /> */}
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";
import HomePage from "../HomePage/HomePage";
import RetreatsListPage from "../RetreatsListPage/RetreatsListPage";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import RetreatDetailsPage from "../RetreatDetailsPage/RetreatDetailsPage";
import RetreatsListItem from "../../components/RetreatsListItem/RetreatsListItem";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <SearchComponent />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/catalog" element={<HomePage />} />
            <Route path="/retreats" element={<RetreatsListPage />} />
            <Route path="/retreat/:retreatName" element={<RetreatDetailsPage />} />

            {/* <Route path="/*" element={<Navigate to="/catalog" />} /> */}
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

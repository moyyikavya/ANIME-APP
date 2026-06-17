import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

import Animes from "../pages/Animes";

import AnimeDetails from "../pages/AnimeDetails";

import AddAnime from "../pages/AddAnime";

import EditAnime from "../pages/EditAnime";

import Watchlist from "../pages/Watchlist";

import Favorites from "../pages/Favorites";

import Register from "../pages/Register";

import Login from "../pages/Login";

import Logout from "../pages/Logout";

import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/animes"
        element={<Animes />}
      />

      <Route
        path="/animes/:id"
        element={<AnimeDetails />}
      />

      <Route
        path="/watchlist"
        element={<Watchlist />}
      />

      <Route
        path="/favorites"
        element={<Favorites />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/logout"
        element={<Logout />}
      />

      <Route
        path="/add-anime"

        element={

          <ProtectedRoute>

            <AddAnime />

          </ProtectedRoute>

        }

      />

      <Route
        path="/edit-anime/:id"

        element={

          <ProtectedRoute>

            <EditAnime />

          </ProtectedRoute>

        }

      />

    </Routes>

  );

}

export default AppRoutes;
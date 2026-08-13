import { Route, Routes } from "react-router";
import { useContext } from "react";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Catalog from "./components/catalog/Catalog.jsx";
import Details from "./components/details/Details.jsx";
import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";
import Logout from "./components/logout/Logout.jsx";
import Edit from "./components/edit/Edit.jsx";
import GameCreate from "./components/game-create/GameCreate.jsx";
import UserContext from "./contexts/UserContext.jsx";
import AuthGuard from "./components/authGuard.jsx";

function App() {
  const { user } = useContext(UserContext);
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route
          path="/games/:gameId/details"
          element={<Details user={user} />}
        />
        <Route
          path="/games/:gameId/edit"
          element={
            <AuthGuard>
              <Edit />
            </AuthGuard>
          }
        />
        <Route
          path="/games/create"
          element={
            <AuthGuard>
              <GameCreate />
            </AuthGuard>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

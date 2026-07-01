import { Link } from "react-router";
export default function Header() {
  return (
    <header>
      <nav>
        <Link className="home" to="/">
          {" "}
          <img src="./images/logo.png" alt="logo" />
        </Link>
        <Link to="/catalog">Catalog</Link>
        {/* Logged-in users */}
        <div id="user">
          <Link to="/games/create">Add Game</a>
          <Link to="/logout">Logout</a>
        </div>
        {/* Guest users */}
        <div id="guest">
          <Link to="/login">Login</a>
          <Link to="/register">Register</a>
        </div>
      </nav>
    </header>
  );
}

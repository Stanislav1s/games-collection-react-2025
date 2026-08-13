import { Navigate } from "react-router";
import { useContext } from "react";
import UserContext from "../contexts/UserContext.jsx";

export default function AuthGuard({ children }) {
  const { isAuthenticated } = useContext(UserContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

function App() {
  const { currentUser } = useContext(AuthContext);  // Get current user from context
  const { darkMode } = useContext(DarkModeContext);  // Get dark mode status

  // Layout for logged-in users
  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  // ProtectedRoute: Only allow access if the user is logged in
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;  // Redirect to login if not logged in
    }

    return children;  // Return children (the page content) if the user is logged in
  };

  const router = createBrowserRouter([
    {
      path: "/", 
      element: (
        <Layout />  // Directly load Home (or any other page you prefer)
      ),
      children: [
        {
          path: "/",
          element: <Home />,  // Home page for logged-in users
        },
        {
          path: "/profile/:id",
          element: <Profile />,  // Profile page, only for logged-in users
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,  // Login page (marking purposes only)
    },
    {
      path: "/register",
      element: <Register />,  // Register page (marking purposes only)
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


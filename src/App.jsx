import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect, useCallback } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./pages/Admin";
import "./index.css";

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  // login inputs state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "admin1234") {
      alert("Login success");
      setAuthenticated(true);
      navigate("/admin");
    } else {
      alert("Wrong email or password");
    }
  };

  // --- Fleet state ---
  const [fleets, setFleets] = useState([]);

  const addFleet = useCallback((fleetObj) => {
    setFleets((prev) => [...prev, fleetObj]);
  }, []);

  const updateDriver = useCallback((id) => {
    const newName = prompt("Enter new driver name");
    if (!newName || !newName.trim()) return; 
    setFleets((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, driver: newName.trim() } : item
      )
    );
  }, []);

  const toggleAvailability = useCallback((id) => {
    setFleets((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: item.status === "Available" ? "Unavailable" : "Available" } : item
      )
    );
  }, []);

  const deleteFleet = useCallback((id) => {
    if (confirm("Are you sure?")) {
      setFleets((prev) => prev.filter((item) => item.id !== id));
    }
  }, []);

  return (
    <Routes>
      {/* LOGIN PAGE */}
      <Route
        path="/login"
        element={
          <div className="login-container">
            <h2>Login</h2>
            <input
              type="email"
              placeholder="Email"
              ref={emailRef}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        }
      />

      {/* ADMIN ROUTE */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute isAuth={authenticated}>
            <Admin
              fleets={fleets}
              addFleet={addFleet}
              updateDriver={updateDriver}
              toggleAvailability={toggleAvailability}
              deleteFleet={deleteFleet}
            />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

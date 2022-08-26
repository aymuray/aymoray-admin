import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="bg-slate-300 h-screen flex">
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

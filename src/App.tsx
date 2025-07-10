import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import Privateroute from "./protectedroute/Privateroute";

const App = () => {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
          <Privateroute>
          <Dashboard />
        </Privateroute>} />
      </Routes>
    </Router>
    </AuthProvider>
  )
}

export default App
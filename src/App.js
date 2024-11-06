import Randompassword from "./RandomPasswordGenerator/Randompassword.jsx";
import Login from "./Pages/Component/login.js";
import Logout from "./Pages/Component/logout.js";
import ProtectedRoute from "./Pages/Component/protectedRoute.js";
import Signup from "./Pages/Component/signup.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route set to Login */}
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protecting the random password route */}
        <Route element={<ProtectedRoute />}>
          <Route path="/randompassword" element={<Randompassword />} />
        </Route>

        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;

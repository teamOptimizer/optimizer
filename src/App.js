import {
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import Home from "./pages/home/Home";
import Login from "./pages/home/login/Login";
import Profile from "./pages/home/profile/Profile";
import Register from "./pages/home/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile/:username" element={<Profile/>}/>
      </Routes>
    </Router>
  );
  
}

export default App;

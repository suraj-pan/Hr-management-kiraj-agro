import "./App.css";
import Login from "./Components/Login";
import { Routes,Route } from "react-router-dom";
import Profile from "./Components/Profile";
import Adminpage from "./Components/Adminpage";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
    


      <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/profile/:id" element={<Profile/>} />
          <Route path="/admin" element={<Adminpage/>} />
        </Routes>
    </div>
  );
}

export default App;

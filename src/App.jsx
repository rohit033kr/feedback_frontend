import Feedback from "./components/Feedback";
import Admin from "./components/Admin";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import {BrowserRouter,Routes,Route} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="/feedback" element={<ProtectedRoute><Feedback /></ProtectedRoute>} />
         <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

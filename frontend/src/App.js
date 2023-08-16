import { Landingpage } from "./components/Landingpage";
import Login from "./components/Login";
import { Navbar } from "./components/Navbar";
import Register from "./components/Register";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/landingpage" element={<div><Navbar/><Landingpage /></div>} />
       </Routes>
    </BrowserRouter>

  );
}

export default App;

import { CreateBlog } from "./components/CreateBlog";
import { Landingpage } from "./components/Landingpage";
import Login from "./components/Login";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";
import Register from "./components/Register";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/landingpage" element={<div><Navbar/><Landingpage /></div>} />
          <Route path="/createblog" element={<div><Navbar/><CreateBlog /></div>} />
          <Route path="/profile" element={<div><Navbar/><Profile /></div>} />
         
       </Routes>
    </BrowserRouter>

  );
}

export default App;

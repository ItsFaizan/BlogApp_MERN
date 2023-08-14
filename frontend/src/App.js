import { Landingpage } from "./components/Landingpage";
import Login from "./components/Login";
import Register from "./components/Register";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/landingpage" element={<Landingpage />} />
       </Routes>
    </BrowserRouter>

  );
}

export default App;

import { CreateBlog } from "./components/CreateBlog";
import { EditProfile } from "./components/EditProfile";
import { Landingpage } from "./components/Landingpage";
import Login from "./components/Login";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";
import Register from "./components/Register";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ViewBlog } from "./components/ViewBlog";
import { AllBlogs } from "./components/AllBlogs";
import { BlogDetails } from "./components/BlogDetails";
import { LikedBlogsPage } from "./components/LikedBlogs";

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/landingpage" element={<div><Navbar/><Landingpage /></div>} />
          <Route path="/createblog" element={<div><Navbar/><CreateBlog /></div>} />
          <Route path="/profile" element={<div><Navbar/><Profile /></div>} />
          <Route path="/editprofile" element={<div><Navbar/><EditProfile /></div>} />
          <Route path="/viewblogs" element={<div><Navbar/><ViewBlog /></div>} />
          <Route path="/blogs" element={<div><Navbar/><AllBlogs /></div>} />
          <Route path="/likedblogs" element={<div><Navbar/><LikedBlogsPage /></div>} />
          <Route path="/blogdetails/:id" element={<div><Navbar/><BlogDetails /></div>} />
       </Routes>
    </BrowserRouter>

  );
}

export default App;

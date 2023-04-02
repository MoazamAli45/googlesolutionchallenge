import "./App.css";
import { Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Auth from "./pagesauth/AuthPage";
import authContext from "./componentsauth/store/auth-context";
import { useContext } from "react";
import Profile from "./componentsauth/Profile/UserProfile";
import AuthHome from "./pagesauth/HomePage";

import Donation from "./componentsauth/StartingPage/Donation";
import Blogs from "./pages/Blogs";
import DonationTable from "./componentsauth/StartingPage/Donation-table";

function App() {
  const authCtx = useContext(authContext);
  const loggedin = authCtx.isLoggedIn;

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route exact path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />( )
      <Route path="/authhome" element={loggedin && <AuthHome />} />
      <Route path="/profile" element={loggedin && <Profile />} />
      <Route path="/profile" element={!loggedin && <Auth />} />
      <Route path="/donation" element={<Donation />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="donation-table" element={<DonationTable />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;

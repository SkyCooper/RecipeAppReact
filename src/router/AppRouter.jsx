import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Card from "../components/card/Card";
import PrivateRouter from "../router/PrivateRouter";
import { useState } from "react";
import Logout from "../components/logout/Logout";

const AppRouter = () => {
  const [isloggedin, setIsloggedin] = useState(false)
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="card" element={<Card />} />
      </Route>
      <Route path="about" element={<PrivateRouter isloggedin={isloggedin} />}>
        <Route path="" element={<About />} />
      </Route>
      <Route path="details/:label" element={<PrivateRouter isloggedin={isloggedin} />}>
        <Route path="" element={<Details />} />
      </Route>
      <Route path="login" element={<Login setIsloggedin={setIsloggedin} />} />
      <Route path="logout" element={<Logout setIsloggedin={setIsloggedin} />} />

    </Routes>
  );
};

export default AppRouter;

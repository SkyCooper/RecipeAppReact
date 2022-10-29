import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Card from "../components/card/Card";
import PrivateRouter from "../router/PrivateRouter";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route path="card" element={<Card/>}/>
      </Route>
      <Route path="about" element={<PrivateRouter />}>
        <Route path="" element={<About />} />
      </Route>
      <Route path="details" element={<PrivateRouter />}>
        <Route path="" element={<Details />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;

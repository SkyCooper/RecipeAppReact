import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Global.styled";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Details from "./pages/details/Details";
import Home from "./pages/home/Home";
import PrivateRouter from "./router/PrivateRouter";

const style = {
  colors: {
    header: "#b8b2b2",
    body: "#eee",
    footer: "#8A1C4A",
  },
};

const App = () => {
  return (
    <>
      <ThemeProvider theme={style}>
          <Navbar />
          <GlobalStyles />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<PrivateRouter />}>
            <Route path="about" element={<About />} />
          </Route>
          <Route path="details" element={<PrivateRouter />}>
            <Route path="details" element={<Details/>} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;

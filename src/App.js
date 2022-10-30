import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Global.styled";
import Navbar from "./components/navbar/Navbar";
import AppRouter from "./router/AppRouter";

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
          <GlobalStyles />
          <Navbar />
          <AppRouter />
      </ThemeProvider>
    </>
  );
};

export default App;

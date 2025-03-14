import Header from "./Header";
import Footer from "./Footer";
import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../../contexts/ThemeContext";

const Inner = (props) => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div className="container" data-theme={darkTheme ? "dark" : "light"}>
      <Header />
      {props.children}
      <br />
      <Footer />
    </div>
  );
};

const Layout = (props) => {
  return (
    <ThemeProvider>
      <Inner {...props} />
    </ThemeProvider>
  )
};

export default Layout;

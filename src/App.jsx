import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;

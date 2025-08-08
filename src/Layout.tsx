// ** styles import
import styles from "./layout.module.scss";

// ** React import
import { BrowserRouter as Router } from "react-router-dom";

// ** Component import
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Header from "./components/header/Header";
import About from "./pages/About/About";
import Resume from "./pages/Resume/Resume";
import Skill from "./pages/Skill/Skill";
import ContactMe from "./pages/ContactMe/Contact";
import ToastifyProvider from "./components/Toast";

function Layout() {
  return (
    <Router>
      <Header />
      <Navbar />
      <ToastifyProvider />
      <div className={styles.layoutBody}>
        <Home />
        <About />
        <Resume />
        <Skill />
        <ContactMe />
      </div>
    </Router>
  );
}
export default Layout;

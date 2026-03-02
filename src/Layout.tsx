// ** styles import
import styles from "./layout.module.scss";

// ** React import
import { BrowserRouter as Router } from "react-router-dom";

// ** Component import
import NavbarV2 from "./components/nav-v2/Navbar-v2";
import WorkWithMe from "./components/WorkWithMe";
import ToastifyProvider from "./components/Toast";
import ProgressBar from "./pages/ProgressBar";
import About from "./pages/About/About";
import SkillsV2 from "./pages/SkillsV2/Skill";
import Resume from "./pages/Resume/Resume";

function Layout() {
  return (
    <Router>
      {/* Version 1 */}
      {/* <Header />
      <Navbar />
      <ToastifyProvider />
      <div className={styles.layoutBody}>
        <Home />
        <About />
        <Resume />
        <Skill />
        <ContactMe />
      </div> */}

      {/* Version 2 */}
      <NavbarV2 />
      <WorkWithMe />
      <ToastifyProvider />
      <div className={styles.layoutBody}>
        <ProgressBar />
        <About />
        <SkillsV2 />
        {/* <WorkExperience /> */}
        <Resume />
      </div>
    </Router>
  );
}
export default Layout;

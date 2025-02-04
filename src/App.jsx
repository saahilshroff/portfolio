import styles from "./App.module.css";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <Experience />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;

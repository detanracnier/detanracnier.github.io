import './css/main.css';
import Sidebar from "./components/sidebar";
import Intro from "./components/intro";
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="appBody">
      <Sidebar />
      <div id="wrapper">
        <Intro />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import About from "./components/About";
import './styles/index.css';
import Formations from "./components/Formations";
import Competances from "./components/Competences";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <header><Navbar/></header>
      <body>
      
        <About/>
        <div className="section-separator"></div>
        <Formations/>
        <div className="section-separator"></div>
        <Competances/>
        <div className="section-separator"></div>
        <Project/>
        <div className="section-separator"></div>
        <Contact/>
        <Footer/>
      </body>
    </div>
  );
}

export default App;
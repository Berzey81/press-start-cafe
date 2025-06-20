import Hero from "./components/Hero";
import Menu from "./components/Menu";
import ArcadeZone from "./components/ArcadeZone";
import Contact from "./components/ContactForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <ArcadeZone />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
// This is the main App component that renders the Hero component.

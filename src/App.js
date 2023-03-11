import Header from "./components/header";
import "./App.css";
import HeroSection from "./components/main/hero-section";
import Inspiration from "./components/main/inspiration";
import Shop from "./components/main/shop";
import Contact from "./components/main/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Inspiration />
      <Shop />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

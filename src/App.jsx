import { React } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div >
        <Navbar />
        <Hero />
      </div>
      <Footer />
    </div>
  );
}

export default App;

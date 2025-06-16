import { useEffect, useState } from "react";
import "./App.css";
import Feature from "./components/Feature";
import HelpUs from "./components/HelpUs";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Header from "./components/common/Header";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      id="root-container"
      className="relative mx-auto min-h-screen w-full max-w-screen-2xl overflow-x-hidden"
    >
      <Header isScrolled={isScrolled} />
      <main id="root-main" className="z-10 px-14">
        <section
          id="hero-section"
          className="min-h-[calc(100vh-2.5rem-48px)] w-full"
        >
          <Hero />
        </section>
        <section id="work-section" className="w-full py-40">
          <Work />
        </section>
        <section id="feature-section" className="w-full pt-20">
          <Feature />
        </section>
        <section id="helpus-section" className="w-full pt-40">
          <HelpUs />
        </section>
        <div className="divider mt-11 h-18 w-full"></div>
      </main>
      <aside
        className={`absolute top-0 left-0 min-h-[calc(100vh-2.5rem-48px)] w-full ${isScrolled ? "hidden" : "animate-pulse"}`}
      >
        <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 flex-col items-center gap-y-2">
          <img src="/src/assets/icon_mouse.svg" alt="scroll mouse icon" />
          <span>Scroll Down</span>
        </div>
      </aside>
    </div>
  );
}

export default App;

import Hero from "./components/Hero";
import SectionTwo from "./components/SectionTwo";
import FavouriteProjects from "./components/FavouriteProjects";
import { Footer } from "./components/Footer";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="max-w-7xl px-4 md:px-8 mx-auto">
      <Hero />
      <SectionTwo />
      <Experience />
      <FavouriteProjects />
      <Contact />
      <Footer />
    </div>
  );
}

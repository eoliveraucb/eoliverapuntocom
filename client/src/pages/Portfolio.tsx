import { Header } from "../components/portfolio/Header";
import { Hero } from "../components/portfolio/Hero";
import { About } from "../components/portfolio/About";
import { FontDemo } from "../components/portfolio/FontDemo";
import { Portfolio as PortfolioGallery } from "../components/portfolio/Portfolio";
import { Courses } from "../components/portfolio/Courses";
import { Contact } from "../components/portfolio/Contact";

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <FontDemo />
        <PortfolioGallery />
        <Courses />
        <Contact />
      </main>
    </div>
  );
}

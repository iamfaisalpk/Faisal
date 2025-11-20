import Navbar from "./(components)/navbar/Navbar";
import About from "./(sections)/about/About";
import Experience from "./(sections)/experience/Experience";
import Hero from "./(sections)/hero/Hero";
import Projects from "./(sections)/projects/Projects";
import Skills from "./(sections)/skills/Skills";
import Footer from "./(components)/footer/Footer";
import Contact from "./(sections)/contact/Contact";

export default function Home() {
    return (
        <div className="min-h-screen  transition-colors duration-300">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
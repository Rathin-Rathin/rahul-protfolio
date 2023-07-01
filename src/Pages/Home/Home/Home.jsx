import About from "../About/About";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <>
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact/>
        </>
    );
};

export default Home;
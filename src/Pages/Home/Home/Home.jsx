import About from "../About/About";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import MyProjects from "../MyProjects/MyProjects";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <>
            <About />
            <Skills />
            <MyProjects/>
            <Education />
            <Contact/>
        </>
    );
};

export default Home;
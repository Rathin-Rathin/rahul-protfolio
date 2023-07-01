
import useTitle from "../../../hooks/Title/useTitle";
import SectionTitle from "../../../components/SectionTitle";
import { motion } from "framer-motion"
import htmlIcon from '../../../assets/icons/html.png';
import cssIcon from '../../../assets/icons/css.png';
import bootstrapIcon from '../../../assets/icons/bootstrap.png';
import tailwindIcon from '../../../assets/icons/tailwind.png';
import javascriptIcon from '../../../assets/icons/javascript.png';
import reactIcon from '../../../assets/icons/react.png';
import nodeIcon from '../../../assets/icons/node.png';
import expressIcon from '../../../assets/icons/express.png';
import firebaseIcon from '../../../assets/icons/firebase.png';
import mongodbIcon from '../../../assets/icons/mongodb.png';
import stripeIcon from '../../../assets/icons/stripe.png';
import nextjsIcon from '../../../assets/icons/next.png';
import Skill from "../../../components/Skill";
const Skills = () => {
    useTitle('Skills');
    return (
        <motion.div animate={{ opacity: 1, transition: { duration: 2, delay: 1 } }} initial={{ opacity: 0 }}>
            <SectionTitle heading="MY SKILLS" />
            <div className="my-12 pt-12 ">
                <p className="">From last 1 year I am learning web-development.During this time i have learned many technologies.Some of them i got expertise ,and some of them ,i am familiar with. All the technologies ,that i know are listed below.Day by day i am learning ,and making my skills stronger.</p>
                <p className="">Hope my knowledge will help you to improve your business and will help you to solve your problem.</p>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 group  gap-6">
                <Skill icon={htmlIcon} title="HTML5" disc="I know HTML5  is a concise description of possessing knowledge and proficiency in the latest version of the Hypertext Markup Language, used for creating and structuring web content"/>
                <Skill icon={cssIcon} title="CSS3" disc="I know CSS3 signifies expertise in the latest version of Cascading Style Sheets, enabling the design and presentation of web pages, including layout, colors, fonts, and animations."/>
                <Skill icon={bootstrapIcon} title="BOOTSTRAP" disc="Bootstrap refers to proficiency in utilizing the popular front-end framework that simplifies web development, providing pre-designed components and responsive layouts for creating modern and mobile-friendly websites"/>
                <Skill icon={tailwindIcon} title="TAILWIND" disc="I have a deep knowledge about tailwind css. Showcases expertise in the utility-first CSS framework that enables rapid and flexible web development, allowing for easy customization and building modern user interfaces with minimal code.DaisyUi and flowbite are the populer plugin.And i have work experiense with those plugins "/>
                <Skill icon={javascriptIcon} title="JAVASCRIPT" disc="JavaScript indicates proficiency in the versatile programming language used to create interactive and dynamic elements on web pages, enabling enhanced user experiences and functionality"/>
                <Skill  icon={reactIcon} title="REACT JS" disc="I have signifies expertise in the popular JavaScript library for building user interfaces, enabling the creation of interactive and reusable components for efficient and scalable web applications."/>
                <Skill  icon={nodeIcon} title="NODE JS" disc="Node.js represents proficiency in the JavaScript runtime environment that allows server-side execution of JavaScript code, facilitating scalable and efficient development of web applications and APIs."/>
                <Skill  icon={expressIcon} title="EXPRESS JS" disc="I have some  signifies expertise in the minimalist web application framework for Node.js, enabling the development of robust and scalable server-side applications with simplified routing, middleware, and HTTP utility methods"/>
                <Skill  icon={mongodbIcon} title="MONGODB" disc="Mongobd is one of  the popular NoSQL database management system that offers flexible and scalable data storage solutions, facilitating the development of high-performance applications with schema-less document-oriented data models"/>
                <Skill  icon={firebaseIcon} title="FIREBASE" disc="Firebase refers to proficiency in the comprehensive platform for building web and mobile applications. It provides a range of services such as real-time database, authentication, hosting, and cloud functions, enabling rapid development and deployment of scalable and secure applications."/>
                <Skill  icon={stripeIcon} title="STRIPE" disc="Stripe is one of  the popular payment processing platform that enables businesses to accept online payments securely. It provides a developer-friendly API and a suite of tools for handling payments, subscriptions, and managing financial transactions effectively"/>
                <Skill  icon={nextjsIcon} title="NEXT JS" disc="During my learning period , i learned that Next.js is a popular React-based framework used for building server-side rendered and statically generated web applications. It provides a robust set of features and conventions that simplify the development process and enhance the performance of web applications."/>
            </div>
           
        </motion.div>
    );
};

export default Skills;

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import img1 from '../../../assets/img1.png'
import img2 from '../../../assets/img2.png'
import Typical from 'react-typical'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import resume from '../../../assets/resume.pdf'
import useTitle from '../../../hooks/Title/useTitle';
const AutoplaySlider = withAutoplay(AwesomeSlider);
const About = () => {
    useTitle('About');
    return (
        <AutoplaySlider
            className="z-0"
            play={true}
            organicArrows={false}
            bullets={false}
            cancelOnInteraction={false}
            interval={6000}
        >
            <div className='w-full h-full bg-black flex justify-between' >
                <div className='w-full  flex justify-evenly items-center'>
                    <div className='w-full ms-6'>
                        <p className='text-xl md:text-3xl myFont'><span className='text-4xl font-bold text-yellow-400'>Hi ! </span>I am  { }
                            <Typical
                                className="text-slate-400"
                                steps={[
                                    'Rathin Barai (Rahul)'
                                    ,
                                    1000,
                                    'A Mern-stack developer',
                                    1000]}


                                loop={Infinity}
                                wrapper="p"
                            />
                        </p>
                        <p className='text-xl hidden md:block py-3'>Hello ! I am a self learner ,technology lover and a professional web-developer.I will build your web application user friendly.Your application will be responsive and easy to use. </p>

                        <motion.div animate={{ y: 30, transition: { duration: 2, delay: 1 } }} className='w-full mb-28 md:mb-0'>
                            <a href={resume} rel="noreferrer" download="resume" target='_blank'>
                                <button className='myButton1 border'>Download cv</button>
                            </a>
                            <Link to="/contact" className='myButton2 ms-6'>Hire Me</Link>
                        </motion.div>
                    </div>
                </div>
                <img className='hidden md:block md:w-[400px]' src={img1} alt="" />
            </div>
            <div className='w-full h-full  bg-black flex justify-between' >
                <div className='w-full  flex justify-evenly items-center'>
                    <div className='w-full ms-6 '>
                        <p className='text-xl md:text-3xl myFont'><span className='text-4xl font-bold text-yellow-400'>Hi ! </span>I am  { }
                            <Typical
                                className="text-slate-400"
                                steps={[
                                    'A full-stack web-developer'
                                    ,
                                    1000,
                                    'Also a web Designer',
                                    1000]}


                                loop={Infinity}
                                wrapper="p"
                            />
                        </p>
                        <p className='text-xl hidden md:block py-3'>Hello ! I am a self learner ,technology lover and a professional web-developer.I will build your web application user friendly.Your application will be responsive and easy to use. </p>
                        <motion.div animate={{ y: 30, transition: { duration: 2, delay: 1 } }} className='w-full mb-32  md:mb-0'>
                            <a href={resume} rel="noreferrer" download="resume" target='_blank'>
                                <button className='myButton1 border'>Download cv</button>
                            </a>
                            <Link to="/contact" className='myButton2 ms-6'>Hire Me</Link>
                        </motion.div>
                    </div>
                </div>
                <img className='pt-3 hidden lg:block md:w-[500px]' src={img2} alt="" />
            </div>


        </AutoplaySlider >
    );
};

export default About;
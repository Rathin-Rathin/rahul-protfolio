import SectionTitle from "../../../components/SectionTitle";
import useTitle from "../../../hooks/Title/useTitle";
import { motion } from "framer-motion";
import linkedin from '../../../assets/socialIcon/linkedin.gif';
import email from '../../../assets/socialIcon/email.gif';
import phone from '../../../assets/socialIcon/phone.gif';
import whatsapp from '../../../assets/socialIcon/whatsapp.gif';
import ContactForm from "./ContactForm";
import { ToastContainer } from "react-toastify";

const Contact = () => {
    useTitle('Contact');
    return (
        <div className="pb-12">
            <SectionTitle heading="Contact Me" />
            <motion.div animate={{y:30, opacity: 1, transition: { duration: 2, delay: 1, } }} initial={{ opacity: 0}}
                className="mt-16 "
            >
                <div className="grid grid-cols md:grid-cols-2">
                    <div className="">
                        <motion.div animate={{y:0, opacity: 1, transition: { duration: 1, delay: 1 } }} initial={{ opacity: 0 }} className="flex  hover:text-yellow-200 cursor-pointer  items-center md:flex-row gap-2 ">
                            <img className="w-[25px] my-3  rounded my-shadow3 cursor-pointer" src={whatsapp} alt="" />
                            <small className="hover:border-b-2 hover:border-blue-500 text-lg font-bold">01811894289</small>
                        </motion.div>
                        <motion.div animate={{y:30, opacity: 1, transition: { duration: 2, delay: 1 } }} initial={{ opacity: 0 }} className="flex hover:text-yellow-200 cursor-pointer  items-center md:flex-row gap-2">
                            <img className="w-[25px] my-3 rounded my-shadow3 cursor-pointer" src={linkedin} alt="" />
                            <small className="hover:border-b-2 hover:border-blue-500 cursor-pointer text-lg font-bold">Rathin Barai Rahul</small>
                        </motion.div>
                        <motion.div animate={{y:60, opacity: 1, transition: { duration: 3, delay: 1 } }} initial={{ opacity: 0 }} className="flex hover:text-yellow-200 cursor-pointer  items-center md:flex-row gap-2">
                            <img className="w-[25px] my-3 rounded my-shadow3 cursor-pointer" src={phone} alt="" />
                            <small className="hover:border-b-2 hover:border-blue-500 text-lg font-bold">01811894289</small>
                        </motion.div>
                        <motion.div animate={{y:90, opacity: 1, transition: { duration: 4, delay: 1 } }} initial={{ opacity: 0 }} className="flex hover:text-yellow-200 cursor-pointer  items-center md:flex-row gap-2">
                            <img className="w-[25px] my-3 rounded my-shadow3 cursor-pointer" src={email} alt="" />
                            <small className="hover:border-b-2 hover:border-blue-500 text-lg font-bold">rathinbaraiRB37@gmail.com</small>
                        </motion.div>

                    </div>
                    <div className="mt-32 md:mt-0">
                        <ContactForm />
                        <ToastContainer className='absolute top-0 right-0' />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
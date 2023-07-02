import { motion } from "framer-motion";
import { useForm } from '@formspree/react';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const notify = () => toast("Thanks for contact with me !");
const ContactForm = () => {

    const MyContactForm = () => {
        const [state, handleSubmit] = useForm("mnqkarej");
        if (state.succeeded) {
            return notify();
        }
        return (
            <form onSubmit={handleSubmit}>
                <motion.p animate={{ y:0,opacity:1, transition: { duration: 1, delay: 1 } }} initial={{ opacity: 0 }}className="mb-3">
                    <label htmlFor="name" className="text-lg font-semibold mb-1 block uppercase">Your name </label>
                    <input className="bg-transparent bg-blue-400 w-full md:w-[70%] bg-opacity-50 border  outline-none text-white text-opacity-80 px-2 py-1" type="text" name="name" id="name" required />
                </motion.p>
                <motion.p animate={{ y: 10,opacity:1 , transition: { duration: 2, delay: 1} }}initial={{ opacity: 0 }} className="mb-3">
                    <label htmlFor="email" className="text-lg block font-semibold mb-1 uppercase">Email please</label>
                    <input className="bg-transparent bg-blue-400 w-full md:w-[70%] bg-opacity-50 border  outline-none text-white text-opacity-80 px-2 py-1" type="email" name="email" id="email" required />
                </motion.p>
                <motion.p animate={{ y: 20,opacity:1 , transition: { duration: 3, delay: 1} }} initial={{ opacity: 0 }} className="mb-3">
                    <label htmlFor="message" className="text-lg block font-semibold mb-1 uppercase">Your message</label>

                    <textarea className="bg-transparent bg-blue-400 bg-opacity-50 border  outline-none text-white text-opacity-80 px-2 py-1 w-full md:w-[70%]" name="message" id="message" rows="5" required></textarea>
                </motion.p>
                <motion.p animate={{ y: 10,opacity:1, transition: { duration: 4, delay: 1 } }} initial={{ opacity: 0 }} className="mb-3">
                    <input type="submit" value="Send message" className="border-b-2 hover:border-blue-600 font-bold border-yellow-400 rounded p-2  cursor-pointer" />
                </motion.p>
            </form>
        )
    }

    return (
        <>
            <MyContactForm/>
            
        </>
    );
};

export default ContactForm;
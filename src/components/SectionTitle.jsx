
import { motion } from "framer-motion"
const SectionTitle = ({ heading }) => {

    return (
        <motion.div
            className="z-0 text-center"
            animate={{y:30 , transition: { duration: 2, delay: 1 } }}>
            <span className=" text-yellow-400 text-2xl  my-shadow2 pb-1  px-6 md:px-28  rounded-full">{heading}</span>
        </motion.div>
    );
};

export default SectionTitle;

import { motion } from "framer-motion"
import { Link } from "react-router-dom";
const Skill = ({ icon, title, disc }) => {
    console.log(icon)
    return (
        <motion.div animate={{ opacity: 1, transition: { duration: 2, delay: 1 } }} initial={{ opacity: 0 }} className=" my-shadow2  rounded bg-blue-600 bg-opacity-20 mb-6">
            <div className="text-center flex flex-col h-full  relative p-2 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer duration-500">
                <div className="flex-grow mb-3">
                    {icon==='/src/assets/icons/react.png'?<img className="animate-spin absolute -top-10 left-0 right-0 w-[100px] mx-auto mt-3 " src={icon} alt="" />:<img className=" absolute -top-10 left-0 right-0 w-[100px] mx-auto mt-3 " src={icon} alt="" />}
                    {title === 'NEXT JS' ? <h1 className="text-2xl font-bold text-yellow-400 opacity-50 my-3 mt-16 ">{title}
                    <small className="block text-sm text-slate-300">( Learning )</small>
                    </h1>
                        
                        : <h1 className="text-2xl font-bold text-yellow-400 opacity-50 my-3 mt-16 ">{title}</h1>}
                    <p className="myFont text-sm opacity-50">{disc}</p>
                </div>
                <div className="mt-auto pb-3 font-semibold ">
                    <Link to='/contact' className=" btn-xs myButton2">Contact</Link>
                </div>
            </div>
        </motion.div>
    );
};

export default Skill;
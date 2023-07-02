import { motion } from "framer-motion"
const Card = ({ bg, name, info, liveLink }) => {
    return (
        <motion.div animate={{ y: 30, opacity: 1, transition: { duration: 2, delay: 1 } }} initial={{ opacity: 0 }} style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}
            className="h-[350px] card-shadow rounded relative group cursor-pointer"
        >
            <div className="bg-blue-900  rounded absolute top-0 -right-full backdrop-blur-sm  bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:block group-hover:right-0 text-white p-3 md:p-6  h-full w-full cursor-pointer duration-1000 flex flex-col">

                <h1 className="text-2xl font-bold uppercase">{name}</h1>
                <p className="text-md mt-6 leading-5 font-semibold ">{info}</p>
                <small className="text-yellow-400 ">For more info visit the site please.</small>
                <div className="mt-6 ">

                    <a className="btn-xs myButton2 me-2  " href={liveLink} target="_blank" rel="noreferrer"> Live site</a>

                    <a className="btn-xs myButton1 me-2" href="#" target="_blank" rel="noreferrer">Client</a>
                    <a className="btn-xs myButton2  " href="#" target="_blank" rel="noreferrer">Server</a>
                </div>

            </div>
        </motion.div>
    );
};

export default Card;
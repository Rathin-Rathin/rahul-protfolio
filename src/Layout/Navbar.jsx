
import { NavLink } from 'react-router-dom';
import profile from '../assets/profile.jpg'
import { BiSolidHome } from 'react-icons/bi';
import { TbInfoSquare } from 'react-icons/tb';
import { BsPersonFillGear } from 'react-icons/bs';
import { LiaRProject } from 'react-icons/lia';
import { MdCastForEducation } from 'react-icons/md';
import { MdContactPhone } from 'react-icons/md';
const Navbar = () => {
    return (
        <nav className='text-center '>
            <img className='w-[150px] h-[150px] rounded-full mx-auto my-shadow' src={profile} alt="profile_photo" />
            <h1 className='text-2xl myFont font-bold mt-6'>Rathin Barai <span className='text-yellow-400'>(Rahul)</span></h1>
            <p className='myFont text-yellow-400'>Jr Full stack web-developer</p>
            <ul className='mt-6'>
                <p className='mb-3'>
                    <NavLink
                        className={({ isActive, isPending }) =>
                            isPending ? "text-slate-400" : isActive ? "flex justify-center items-center gap-2 text-yellow-400 font-bold text-xl w-1/2 mx-auto border-b-2 border-yellow-400 rounded px-2" : "font-bold text-xl flex justify-center items-center gap-2"
                        }
                        to="/home">
                        <BiSolidHome/>
                        Home
                    </NavLink>
                </p>
                <p className='mb-3'>
                    <NavLink
                        className={({ isActive, isPending }) =>
                        isPending ? "text-slate-400" : isActive ? "flex justify-center items-center gap-2 text-yellow-400 font-bold text-xl w-1/2 mx-auto border-b-2 border-yellow-400 rounded px-2" : "font-bold text-xl flex justify-center items-center gap-2"
                        }
                        to="/about">
                        <TbInfoSquare/>
                        About
                    </NavLink>
                </p>
                <p className='mb-3'>
                    <NavLink
                        className={({ isActive, isPending }) =>
                        isPending ? "text-slate-400" : isActive ? "flex justify-center items-center gap-2 text-yellow-400 font-bold text-xl w-1/2 mx-auto border-b-2 border-yellow-400 rounded px-2" : "font-bold text-xl flex justify-center items-center gap-2"
                        }
                        to="/skills">
                        <BsPersonFillGear/>
                        Skills
                    </NavLink>
                </p>
                <p className='mb-3'>
                    <NavLink
                        className={({ isActive, isPending }) =>
                        isPending ? "text-slate-400" : isActive ? "flex justify-center items-center gap-2 text-yellow-400 font-bold text-xl w-1/2 mx-auto border-b-2 border-yellow-400 rounded px-2" : "font-bold text-xl flex justify-center items-center gap-2"
                        }
                        to="/projects">
                        <LiaRProject/>
                        Projects
                    </NavLink>
                </p>
                <p className='mb-3'>
                    <NavLink
                        className={({ isActive, isPending }) =>
                        isPending ? "text-slate-400" : isActive ? "flex justify-center items-center gap-2 text-yellow-400 font-bold text-xl w-1/2 mx-auto border-b-2 border-yellow-400 rounded px-2" : "font-bold text-xl flex justify-center items-center gap-2"
                        }
                        to="/education">
                        <MdCastForEducation/>
                        Education
                    </NavLink>
                </p>
                <p className='mb-3'>
                    <NavLink
                        className={({ isActive, isPending }) =>
                        isPending ? "text-slate-400" : isActive ? "flex justify-center items-center gap-2 text-yellow-400 font-bold text-xl w-1/2 mx-auto border-b-2 border-yellow-400 rounded px-2" : "font-bold text-xl flex justify-center items-center gap-2"
                        }
                        to="/contact">
                        <MdContactPhone/>
                        Contact
                    </NavLink>
                </p>
            </ul>
            <footer>
                <small>
                © Copyright ©2023 All rights reserved 
                </small>
            </footer>
        </nav>
    );
};

export default Navbar;
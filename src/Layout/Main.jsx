import { Outlet } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import { useState } from "react";
import Navbar from "./Navbar";

const Main = () => {
    const [signal, setSignal] = useState(true);

    const handleSignal = clicked => {
        setSignal(clicked);
    }

    return (

        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-black text-slate-400 p-6">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="absolute top-1 right-1  drawer-button lg:hidden ">
                    {signal ?
                        <AiOutlineMenu className="text-2xl text-yellow-400" onClick={() => handleSignal(!signal)} /> :
                        <RxCross2 className="text-2xl text-yellow-400" />}
                </label>

                <Outlet />

            </div>
            <div className="drawer-side text-center">
                <label onClick={() => handleSignal(!signal)} htmlFor="my-drawer-2" className="drawer-overlay"></label>
                
                
                <div className="menu p-4 w-80 h-full md:border-e-2 border-yellow-400 bg-black text-slate-400">
                    {/* Sidebar content here */}
                    
                   <Navbar/>
                </div>
            </div>
        </div>
    );
};

export default Main;
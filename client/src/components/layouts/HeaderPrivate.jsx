import { NavLink, useNavigate } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import { useState } from "react";

export const Header = ({functions})=>{
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleClick = ()=>{
        functions.logOut();
        navigate("/logIn");
    }
    return(
        <div >
            <header>
            <nav className="bg-zinc-800 flex flex-row-reverse h-16 items-center border-b border-b-slate-500 text-gray-300">
               <ul className="hover:text-gray-100 mr-4">
                  <li><button 
                   onClick={handleClick}
                   className="ring-1 ring-slate-300 flex items-center justify-center rounded h-8 w-8 bg-red-900 pr-1 mr-4" > 
                   <BiLogIn className="w-full h-full" />
                   </button></li>
                </ul>
                <ul className="hover:text-gray-100">
                    <li>
                        <NavLink className={({isActive})=>isActive ?"bg-slate-600 p-4 mx-4":"p-4 mx-4"} to="/products">Product</NavLink>
                    </li>
                </ul>
                
                <ul className="hover:text-gray-100 p-4">
                    <li><NavLink className={({isActive})=>isActive ?"bg-slate-600 p-4":"p-4"} to="/">Home</NavLink></li>
                </ul>
                 <ul onMouseEnter={()=>{setOpen(true)}} 
                    onMouseLeave={()=>{setOpen(false) }} className="hover:text-gray-100 p-4">
                    <li><NavLink className={({isActive})=>isActive ?"bg-slate-600 p-4":"p-4"} to="/products">Home</NavLink></li>
                    {open && <ul className="absolute bg-green-500 w-[75px] ">
                    <li 
                    className="hover:bg-green-300 hover:cursor-pointer">
                            lll
                    </li>
                    <li 
                    className="hover:bg-green-300 hover:cursor-pointer">
                            lll
                    </li>
                    <li 
                    className="hover:bg-green-300 hover:cursor-pointer">
                            lll
                    </li>
                 </ul> }
                    
                </ul>
                
            </nav>
            </header>
        </div>
)
}
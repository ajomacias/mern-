import { NavLink, useSearchParams ,useNavigate } from "react-router-dom";
import {
  MdProductionQuantityLimits} from "react-icons/md";
import { BsClipboardPlus, BsSafeFill } from "react-icons/bs";
import { ImStatsBars } from "react-icons/im";
import { useState, useRef } from "react";

const SideBarProducts = () => {
  const input = useRef(null);
  const navigate = useNavigate();
  const [isOpen , setIsOpen] = useState(true);
  const [ params, setParams ] = useSearchParams();

  const handleKeyUp =()=> {
    setParams({ a : input.current.value });
    
  }

  const handleClick = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <div className= {isOpen && "h-16" +"md:text-white fixed flex md:items-center flex-col opacity-70 md:justify-center w-9/12 h-full m-0  md:mb-2 md:transition-all md:relative py-2 px-2 md:w-2/12 md:flex md:flex-col justify-center items-center bg-zinc-800"}>
      
      {isOpen ? <> <div className="text-gray-300 relative flex justify-center mb-7">
      <button onClick={handleClick} className="text-white bottom-full top-2 left-[90%] absolute md:hidden ">x</button>
        <NavLink to="">
          <MdProductionQuantityLimits className="w-12 h-12 text-green-500 " />
        </NavLink>
      </div>
      <div className="md:text-white flex md:flex md:justify-center w-full md:mb-2 md:transition-all">
        <input
          onClick={() => navigate("search")}
          ref={input}
          className="w-full text-lg text-center p-1 focus:ring-2 focus:outline-none ring-emerald-800 text-black"
          type="text"
          placeholder="Searh product"
          onKeyUp={handleKeyUp}
        />
      </div>

      <div className="text-gray-300 flex justify-center text-lg font-semibold my-2">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-green-500 px-2 rounded" : ""
          }
          to="stadistic"
        >
          <ImStatsBars className="text-gray-300 inline-block h-4 pb-1 w-4" />
          <span>Stadistic</span>
        </NavLink>
      </div>
      <div className="text-gray-300 flex justify-center text-lg font-semibold my-2">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-green-500 px-2 rounded" : ""
          }
          to="create"
        >
          <BsClipboardPlus className="text-gray-300 inline-block h-4 pb-1 w-4" />{" "}
          <span>Create product</span>
        </NavLink>
      </div>
      <div className="text-gray-300 flex justify-center text-lg font-semibold my-2">
      </div> </> :<div><button onClick={handleClick} className= " fixed  bg-slate-600 p-1 w-12 text-white  md:hidden md:relative" >|||</button></div>}
    </div>
  );
};

export default SideBarProducts;

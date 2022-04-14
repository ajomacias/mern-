import { NavLink, useSearchParams ,useNavigate } from "react-router-dom";
import {
  MdProductionQuantityLimits,
  MdManageSearch,
  MdOutlineSearch,
} from "react-icons/md";
import { BsClipboardPlus, BsSafeFill } from "react-icons/bs";
import { ImStatsBars } from "react-icons/im";
import { useState, useRef } from "react";

const SideBarProducts = () => {
  const input = useRef(null);
  const navigate = useNavigate();
  const [ params, setParams ] = useSearchParams();

  const handleClick = () => {
    
    //if (!valor) return;

    //navigate(valor);
  };
  const handleKeyUp =()=> {
    setParams({ a : input.current.value })
  }

  return (
    <div className=" py-2 px-2 w-2/12 flex flex-col justify-center items-center bg-zinc-800">
      <div className="text-gray-300 flex justify-center mb-7">
        <NavLink to="">
          <MdProductionQuantityLimits className="w-12 h-12 text-green-500 " />
        </NavLink>
      </div>

      <div className=" text-white flex justify-center mb-2 transition-all">
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
          <ImStatsBars className="text-gray-300 inline-block h-4 pb-1 w-4" />{" "}
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
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-green-500 px-2 rounded" : ""
          }
          to="inventary"
        >
          <BsSafeFill className="text-gray-300 inline-block h-4 pb-1 w-4" />{" "}
          <span>Inventary</span>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBarProducts;

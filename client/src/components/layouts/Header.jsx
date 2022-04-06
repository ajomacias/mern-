import { NavLink } from "react-router-dom";

export const Header = ()=>{
    return(
        <div>
            <nav>
                <ul>
                    <li><NavLink className={({isActive})=>isActive ?"bg-slate-600":""} to="/">Home</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink className={({isActive})=>isActive ?"bg-slate-600":""} to="/products">Product</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
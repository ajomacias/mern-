import { MdError } from "react-icons/md"
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-4xl font-bold text-teal-600">
      <MdError className="text-red-500 block animate-pulse w-20 h-20" /> 
      <h2 className="block text-5xl" >Page not found</h2>
      <Link to="/" >Home</Link>
    </div>
  );
}
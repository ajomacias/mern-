import { useModalContext } from "../hooks"

export const CardInfoProduct = ({producto}) => {
  const { changeIsOpenModal } = useModalContext();
  return (
    <div className=" w-36 h-32 top-auto shadow-xl transition-all rounded p-2 fixed z-100 border-1 bg-white opacity-100 ring-slate-700 flex flex-col items-center text-white">
     {producto.url && <img className="h-full w-14s block" src={producto.url}/>} 
    </div>
  )
}
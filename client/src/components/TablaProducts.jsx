import { useProductoContext } from "../hooks";
//import { useRef } from "react";
import { MdNoteAdd } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr"
import { useNavigate, Link } from "react-router-dom";
import { CardInfoProduct} from "../components/";
import { useModalContext, useAlertContext } from "../hooks/";
import { AiTwotoneDelete } from "react-icons/ai";
import toast from "react-hot-toast";
import { AiFillFilePdf } from "react-icons/ai";


export const TablaProducts =() => {
   const { productos , deleteProduct} = useProductoContext();
   const navigate = useNavigate();
   const { isOpenModal,changeIsOpenModal } = useModalContext();
   const { generalAlert } = useAlertContext()
    //const ref  = useRef();

   const handleEnter = (e)=>{
    changeIsOpenModal(e.target.getAttribute("lol"), true)
   }

   const handleLeave = ()=>{
    changeIsOpenModal(null, false)
   }

   const handleDelete = (code) =>{
       toast((e)=>(
           <div className="">
               <p>Usted desea elminiar el producto con codigo <strong>{code}</strong></p>
               <div className="flex justify-center">
               <button className="bg-slate-600 hover:bg-slate-500 p-2 px-4 mx-3 text-white" onClick={async()=>{
                   const response = await deleteProduct(code);
                   toast.dismiss(e.id);
                   generalAlert(response.data.message);
               }} >Yes</button>
                <button className="bg-slate-600 hover:bg-slate-500 p-2 px-4 text-white" onClick={()=>{
                    toast.dismiss(e.id);
                }} >No</button>
                </div>
           </div>
       ))
   }

  return (
    
      <>  
        {productos ?<div className="md:p-5 w-full h-full md:w-10/12 md:h-5/6 overflow-y-scroll bg-zinc-500 ">
               <div className=" md:h-full h-full bg-zinc-100 flex items-center md:flex md:items-start md:bg-zinc-100">
                <table className="table-auto  w-full text-leftborder-slate-600">
                    <thead className="bg-blue-500 text-white">
                        <tr>
                            <th className="border-r border-zinc-400" >            
                                ID
                            </th>
                            <th className="border-r border-zinc-400">
                                CODIGO
                            </th>
                            <th className="border-r border-zinc-400">
                                NOMBRE
                            </th >
                            <th className="border-r border-zinc-400">
                                PRECIO
                            </th>
                            <th className="border-r border-zinc-400">
                                ACCIONES
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody >
                        {productos.map((producto, key)=>(
                            <tr key={key} >
                            <td className="border-r border-zinc-400" >
                                {producto._id}
                                
                            </td>
                            <td>
                                {producto.code}
                            </td>
                            <td lol={producto.id} className="border-r text-emerald-700 border-zinc-400 h-fit ">
                            <Link className="hover:text-emerald-400" lol={producto.id} onMouseEnter={handleEnter} onMouseLeave={handleLeave} to={producto.code} >{producto.name}</Link> 
                            {(isOpenModal.isOpen && isOpenModal.id == producto.id && producto.image) && <CardInfoProduct producto={producto} />}
                            </td>
                            <td className="border-r border-zinc-400">
                            {producto.price}
                            </td>
                            <td className="border-r flex justify-center items-center border-zinc-400">
                                <Link to={"create/"+producto.code} className="w-fit p-3 bg-yellow-300 inline-block" ><GrDocumentUpdate/></Link>
                                <Link className="w-fit p-3 bg-red-700 text-white inline-block" to={"/pdf/"+producto.code + ".pdf"}><AiFillFilePdf /></Link>
                                <button onClick={(e)=>{
                                    handleDelete(producto.code);
                                }} className="bg-red-500 w-fit p-3"> <AiTwotoneDelete /> </button>
                            </td>
                        </tr>

                        ))}
                        
                        
                    </tbody>
                </table>
                </div>
                </div> :<button onClick={()=>navigate("create")} className="text-white w-80 h-80 opacity-20 hover:opacity-40 " > <MdNoteAdd className="w-full h-full" /> </button>}       
        </>
  )

}

import { createContext, useState } from "react";

export const modalContext = createContext();

const ModalProvider = ( {children} )=>{

    const [ isOpenModal , setIsOpenModal] = useState({isOpen : false, id : null});

    const changeIsOpenModal = (_id, isOpen = null)=>{
        if(!isOpen) return setIsOpenModal({id : _id, isOpen : !isOpenModal.isOpen});

        setIsOpenModal({id : _id, isOpen : isOpen});
    }

    return(
        <modalContext.Provider value={{
            changeIsOpenModal,
            isOpenModal
        }} >  
        {children}
        </modalContext.Provider>

    )
} 

export default ModalProvider;
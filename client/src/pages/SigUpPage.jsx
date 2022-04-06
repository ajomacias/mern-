import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { VscLoading } from "react-icons/vsc";
import { useAlertContext, useUserContext } from "../hooks";

export const SigUpPage = () => {

    const { createUser } = useUserContext();
    const { generalAlert } = useAlertContext(); 

    return(
     <div className="min-h-screen bg-white bg-opacity-50 flex items-center justify-center" >
         <div className="bg-black bg-opacity-10 p-4 w-80" >
            <header className="flex justify-center" >
                <FaUserPlus className="w-40 h-40 " />
            </header>
         <Formik
         initialValues={{
             name:"",
             email:"",
             password:""
         }}
         onSubmit={async(values,actions)=>{

           const response = await createUser(values);
           generalAlert(response.data.message) 
             
            actions.setSubmitting(false);
             
         }}

         validationSchema={Yup.object({
             name: Yup.string("debe ser una cadena de texto").min(3, "the user is min 3 size").required("this is required!"),
             email : Yup.string("this is a string !").email("This is a address email").required("this is required !!"),
             password : Yup.string("this is a string !").min(10, "min size 10 characteres").required("this is required") 
         })}

         enableReinitialize={true}
         >

        {({isSubmitting, handleSubmit})=>(
            <Form onSubmit={handleSubmit} >
            <label className="block" htmlFor="name" >Name</label>
            <Field name="name" className="focus:outline-none w-full" />
            <ErrorMessage component="p" className="text-red-700 text-xs" name="name" />
            <label className="block" htmlFor="name" >Email</label>
            <Field name="email" className="focus:outline-none w-full" />
            <ErrorMessage component="p" className="text-red-700 text-xs" name="email" />
            <label className="block" htmlFor="password" >Password</label>
            <Field name="password" type="password" className="focus:outline-none w-full" />
            <ErrorMessage name="password" component="p" className="text-red-700 text-xs" />
            <button disabled={isSubmitting} type="submit" className="p-1 w-full bg-slate-700 hover:bg-slate-600 block mx-0 my-2"  >
                {isSubmitting ? <VscLoading className="animate-spin w-4 h-4 mx-auto " /> : "Sig Up!"}</button>
            </Form>
        )}

         </Formik>
     </div>
     </div>

    );
} 
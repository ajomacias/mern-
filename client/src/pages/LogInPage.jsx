import { Formik,Form, ErrorMessage,Field } from "formik";
import * as Yup from "yup";
import { VscLoading } from "react-icons/vsc";
import{ RiShieldUserFill } from "react-icons/ri";
import { useUserContext, useAlertContext } from "../hooks";
import { Link, useNavigate } from "react-router-dom";


export const LogInPage = ()=>{
    const { getInto } = useUserContext();
    const { generalAlert } = useAlertContext();
    const navigate = useNavigate();

    return(
        <div className="min-h-screen bg-white bg-opacity-50 flex items-center justify-center" >
            <div className="bg-black bg-opacity-10 w-80 p-4">
                <header className="flex justify-center">
                    <RiShieldUserFill className="w-40 h-40" />
                </header>
                <Formik
                initialValues={{
                    email:"",
                    password:""
                }}

                onSubmit={async(values, actions)=>{

                  const response = await getInto(values);
                  generalAlert(response.message);
                  actions.setSubmitting(false);

                  navigate("/");

                }}

                validationSchema={Yup.object({
                    email: Yup.string("this is a string").email("this is Email").required("this is required"),
                    password: Yup.string("this is a strig").min(10,"min size 10 characters").required("this is required")
                })}

                enableReinitialize={true}
                >
                    {({handleSubmit, isSubmitting,errors})=>(
                        <Form onSubmit={handleSubmit} >
                        <label htmlFor="email" className="block" >Email</label>
                        <Field name="email" className="w-full focus:outline-none" />
                        <ErrorMessage component="p" className="text-xs text-red-700" name="email" />
                        <label htmlFor="password">Password</label>
                        <Field type="password" name="password" className="w-full focus:outline-none" />
                        <ErrorMessage component="p" name="password" className="text-xs text-red-700" />
                        <button 
                        className="bg-slate-700 hover:bg-slate-600 w-full p-1 my-2"
                        type="submit"
                        disabled={isSubmitting} > {isSubmitting ?<VscLoading className="h-4 w-4 animate-spin mx-auto"/> : "Log In !"  }</button>
                        <Link to="/sigUp" className="text-zinc-800 hover:text-zinc-700 " >Sig Up !</Link>
                        </Form>
                    )}


                </Formik>
                
            </div>
        </div>

    );
}
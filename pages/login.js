import Head from 'next/head'
import Layout from '../layout/layout'
import Link from 'next/link';
import Image from 'next/image';

import {
    FaFacebookF,
    FaLinkedin,
    FaGithub,
    FaGoogle
    
} from "react-icons/fa";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";

import { useState } from 'react';

import { signIn, signOut } from 'next-auth/react';

import { useFormik } from 'formik';

import { redirect } from 'next/dist/server/api-utils';

import login_validate from '../lib/validate';
import styles from '../styles/Form.module.css';


export default function Login() {

    const [show, setShow] = useState(false);

    // formik hook
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: login_validate,
        onSubmit

    })

    async function onSubmit(values) {
        console.log(values)
        
    }


    //GOOGLE HANDLER:
   

    return (
        <Layout>

            <Head>
                <title>Login</title>
            </Head>
            <section className='w-3/4 mx-auto flex flex-col gap-8'>
                <div className='title'>
                    <h1 className='text-gray-800 text-4xl font-bold py-4'>Explore</h1>
                    <p className='w-3/4 mx-auto text-gray-400 '>Fill the form and share experience with us.</p>
                </div>
                {/*form section */}
                <form className='flex flex-col gap-4'>
                    <div className={`${styles.input_group} ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ""}`} >
                        <input type="email" name="email" placeholder="Email"
                            className={styles.input_text}
                            {...formik.getFieldProps('email')}
                        />
                        <span className="icon flex-items-center px-4">
                            <HiAtSymbol size={25} />
                        </span>

                    </div>
                    {/* {formik.errors.email && formik.touched.email ? <span className="text-rose-500">{formik.errors.email}</span> : <></>} */}

                    <div className={`${styles.input_group} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
                        <input type={`${show ? "text" : "password"}`} name="password" placeholder="Password"
                            className={styles.input_text}
                            {...formik.getFieldProps('password')}
                        />
                        <span className="icon flex-items-center px-4" onClick={() => setShow(!show)}>
                            <HiFingerPrint size={25} />
                        </span>

                    </div>
                    {/* {formik.errors.password && formik.touched.password ? <span className="text-rose-500">{formik.errors.password}</span> : <></>} */}
                    {/*Login section */}
                    <div className="input_button" >
                        <button type="submit" className={styles.button}>Login</button>
                    </div>
                    


                    {/* ---------------------------Social Link Section-------------------- */}
                    <div className="flex justify-center my-2 ">
                        <a
                            href="#"
                            className="p-3 mx-1 border-2 border-gray-200 rounded-full  hover:bg-blue-800 hover:text-white"
                        >
                            <FaFacebookF className="text-sm " />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jkgupta273/" 
                            className="p-3 mx-1 border-2 border-gray-200 rounded-full  hover:bg-blue-800 hover:text-white"
                        >
                            <FaLinkedin className="text-sm " />
                        </a>
                        <a
                            href="https://github.com/functionupjkg" 
                            className="p-3 mx-1 border-2 border-gray-200 rounded-full  hover:bg-blue-800 hover:text-white"
                        >
                            <FaGithub className="text-sm " />
                        </a>
                        <a
                            href="https://www.google.com/" 
                            className="p-3 mx-1 border-2 border-gray-200 rounded-full  hover:bg-blue-800 hover:text-white"
                        >
                            <FaGoogle className="text-sm " />
                        </a>
                    </div>
                    {/* -----------------End Social Section----------- */}




                </form>
                {/*bottom section */}

                <p className="text-center text-gray-400">
                    don`t have an account yet? <Link href={'/register'}><a className="text-blue-700">Sign Up</a></Link>
                </p>
            </section>


        </Layout>
    )
}
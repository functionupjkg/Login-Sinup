import Head from 'next/head'
import Layout from '../layout/layout'
import Link from 'next/link';
import Image from 'next/image';

import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";

import { useState } from 'react';

import { useFormik } from 'formik';

import styles from '../styles/Form.module.css';
import { registerValidate } from '../lib/validate';

export default function Register() {
    const [show, setShow] = useState({ password: false, cpassword: false })
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            cpassword: ''
        },
        validate: registerValidate,
        onSubmit
    })

    async function onSubmit(values) {
        console.log(values)
    }

    return (
        <Layout>


            <Head>
                <title>Register</title>
            </Head>

            <section className='w-3/4 mx-auto flex flex-col gap-7'>
                <div className='title'>
                    <h1 className='text-gray-800 text-4xl font-bold py-4'>Register</h1>
                    <p className='w-3/4 mx-auto text-gray-400 '>Fill the form and share experience with us.</p>
                </div>
                {/*form section */}
                <form className='flex flex-col gap-2' onSubmit={formik.handleSubmit}>
                    <div className={`${styles.input_group} ${formik.errors.username && formik.touched.username ? 'border-rose-600' : ''}`}>
                        <input type="text" name="username" placeholder="Username"
                            className={styles.input_text}
                            {...formik.getFieldProps('username')}
                        />
                        <span className="icon flex-items-center px-4">
                            <HiOutlineUser size={20} />
                        </span>
                    </div>
                    {/* {formik.errors.username && formik.touched.username ? <span className="text-rose-500">{formik.errors.username}</span> : <></>} */}
                    <div className={`${styles.input_group} ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
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
                        <input type={`${show.password ? "text" : "password"}`} name="password" placeholder="Password"
                            className={styles.input_text}
                            {...formik.getFieldProps('password')} />
                        <span className="icon flex-items-center px-4" onClick={() => setShow({ ...show, password: !show.password })}>
                            <HiFingerPrint size={25} />
                        </span>
                    </div>
                    {/* {formik.errors.password && formik.touched.password ? <span className="text-rose-500">{formik.errors.password}</span> : <></>} */}
                    <div className={`${styles.input_group} ${formik.errors.cpassword && formik.touched.cpassword ? 'border-rose-600' : ''}`}>
                        <input type={`${show.cpassword ? "text" : "password"}`} name="cpassword" placeholder="Confirm Password"
                            className={styles.input_text}
                            {...formik.getFieldProps('cpassword')} />
                        <span className="icon flex-items-center px-4" onClick={() => setShow({ ...show, cpassword: !show.cpassword })}>
                            <HiFingerPrint size={25} />
                        </span>
                    </div>
                    {/* {formik.errors.cpassword && formik.touched.cpassword ? <span className="text-rose-500">{formik.errors.cpassword}</span> : <></>} */}
                    {/*Login section */}
                    <div className="input_button" >
                        <button type="submit" className={styles.button}> <Link href={'/login'}>Login</Link></button>
                    </div>


                </form>
                {/*bottom section */}

                <p className="text-center text-gray-400">
                    Have an account? <Link href={'/login'}><a className="text-blue-700">Sign In</a></Link>
                </p>
            </section>
        </Layout>
    )
}
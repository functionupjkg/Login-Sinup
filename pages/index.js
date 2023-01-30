import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

import { useState } from 'react';

import { getSession, useSession, signOut } from 'next-auth/react';

export default function Home() {



  const { data: session } = useSession()

  function handleSignOut() {
    signOut()
  }
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>
      {session ? User({ session, handleSignOut }) : Guest()}
      

    </div>
  )
}

// Guest User

function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
    <h2 className='text-4xl font-bold'> Welcome To Home Page !!</h2>
  <div><br></br></div>
      <h3 className='text-4xl font-bold'>Guest Portal </h3>

      <h3 className="flex justify-center">
        <Link href={'/login'}><a className="mt-5 px-10 py-1  rounded-sm bg-indigo-500 text-gray-50">Sign In</a></Link>
      </h3>
    </main>
  )
}

// Authorize User Login 

function User({ session, handleSignOut }) {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className='text-4xl font-bold'>Authorize User Home Page</h3>
      <div className="details">
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>

      <div className="flex justify-center">
        <button onClick= {handleSignOut} className="mt-5 px-10 py-1 rounded-sm bg-indigo-50 bg-gray-50">Sign Out</button>
      </div>

      <h3 className="flex justify-center">
        <Link href={'/profile'}><a className="mt-5 px-10 py-1  rounded-sm bg-indigo-500 text-gray-50">Profile Page</a></Link>
      </h3>
    </main>
  )

}


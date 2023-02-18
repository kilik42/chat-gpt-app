'use client'
import React from 'react'
import { signIn} from 'next-auth/react'
import Image from 'next/image'


function Login() {
  return (
    <div className='bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center'>
       <Image 
            src="https://links.papareact.com/2i6"
            width={400}
            height={400}
            objectFit="contain"
            alt="logo"
       />
       <button 
         onClick={()=> signIn('google')}
       className='text-white font-bold text-3xl animate-pulse border-white-700 border-2 p-5 rounded-lg'>
        Sign in to use Chat GPT
       </button>
        </div>

  )
}

export default Login
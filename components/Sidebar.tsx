'use client'
import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import NewChat from './NewChat'

function Sidebar() {
  const {data: session} = useSession()



  return (
    <div className='p-2 flex flex-col h-screen'>
        <div className='flex-1'>
          
                {/* new chat */}
                <NewChat/>
                <div>
                    {/* model selection */}
                    
                </div>
                {/* map through the chat rows */}

            
        </div>
        {session && 
        <>
          <img 
          onClick={()=> signOut()}
          src={session.user?.image!} alt="Profile pic"
          className='h-12 w-12 rounded-full cursor-pointer mx-auto mb-2'
          />
          <h1 className='text-white mx-auto'>Click profile image to sign out</h1>
          <h4 className='text-white mx-auto'>This is a custom version of chat-gpt</h4>
          </>
        }
    </div>
  )
}

export default Sidebar
'use client'
import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import NewChat from './NewChat'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection } from 'firebase/firestore'
import {db} from '../firebase';
import ChatRow from './ChatRow'

function Sidebar() {
  const {data: session} = useSession()

  const [chats, loading, error]  = useCollection(
    session && collection(db, 'users', session?.user?.email!, 'chats')
  )


  return (
    <div className='p-2 flex flex-col h-screen'>
        <div className='flex-1'>
          
                {/* new chat */}
                <NewChat/>
                <div>
                    {/* model selection */}
                    
                </div>
                {/* map through the chat rows */}
              {chats?.docs.map((chat) => (
                <ChatRow 
                key={chat.id} 
                id={chat.id} 
                users={chat.data().users}/>
              ))}
            
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
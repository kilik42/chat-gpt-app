'use client'

import { PlusIcon } from '@heroicons/react/24/solid'
import { addDoc, collection } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation' // not router but navigation
import React from 'react'
import {db} from '../firebase';
function NewChat() {
  const router = useRouter()
  const {data: session} = useSession()
  const createNewChat = async  () => {
    const doc = await addDoc(collection(db, 'users', session?.user?.email!, 'chats'),{
      messages: [],
      userId: session?.user?.email,
    })

  };
  return (
    <div onCLick={createNewChat} className='border-gray-700 border chatRow'>
        <PlusIcon className='h-4 w-4'/>
        <p>new chat</p>
        </div>
  )
}

export default NewChat
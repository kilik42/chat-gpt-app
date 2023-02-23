import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/solid';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react'
import {useState} from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
type Props = {
  id: string;

}
function ChatRow({id}: Props) {
  const pathname = usePathname;
  const router = useRouter();
  const {data: session} = useSession();
  const [active, setActive] = useState(false);
  const [messages] = useCollection(query(
    collection(db, 'users', session?.user?.email!, 'chats', id, 'messages'),
    orderBy('createdAt', 'asc')
  ))
  
  return (
    <Link href={`/chat/${id}`} className={`chatRow justify-center`}>
      <ChatBubbleLeftIcon className='h-5 w-5' />
      <p className="flex-1 hidden md:inline-flex truncate">
        new chat
      </p>
      <TrashIcon  className='h-5 w-5 text-gray-700 hover:text-red-700'/>
    </Link>
  )
}

export default ChatRow
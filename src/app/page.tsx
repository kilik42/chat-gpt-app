import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { readConfigFile } from 'typescript'
import "./globals.css";
// import {BeakerIcons} from '@heroicons/react/outline';
import {BoltIcon, ExclamationCircleIcon, ExclamationTriangleIcon, SunIcon} from '@heroicons/react/24/outline';
export default function Page() {
  return (
    <div className='flex flex-col items-center justify-center h-screen px-2 text-white'>
      <h1 className="text-5xl font-bold mb-20">Hancock chat gpt </h1>
      {/* <h1 className="text-5xl font-bold mb-20"></h1> */}
      <div className='flex space-x-6'>
        
        <div >
          <div className='flex flex-col items-center mb-5'>
            {/* sun icon */}
            <SunIcon className="h-8 w-8" />
            <h2>examples</h2>
          </div>
          <div className='space-y-2'>
          <p className="infoText">Explain something to me</p>
          <p className="infoText"> what is the difference between a dog and a cat</p>
          <p className="infoText">what is the color of the sun?</p>
          <p className="infoText">what is the color of the sky?</p>
          <p className="infoText">what is the color of the grass?</p>



          </div>
        </div>
        {/* END DIV */}
        {/* ###################################################### */}
        {/* new div */}
        <div>
          <div className='flex flex-col items-center mb-5'>
            {/* sun icon */}
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>
          <div className='space-y-2'>
          <p className="infoText">change the chat gpt model to use</p>
          <p className="infoText"> messages are stored in firebase's firestore</p>
          <p className="infoText">hot notifications when chat gpt is thinking</p>
         
          </div>
        </div>
        {/* END DIV */}
        {/* ###################################################### */}
        {/* new div */}
        {/* new div */}
        <div>
          <div className='flex flex-col items-center mb-5'>
            {/* sun icon */}
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>
          <div className='space-y-2'>
          <p className="infoText">Explain something to me</p>
          <p className="infoText"> what is the difference between a dog and a cat</p>
          <p className="infoText">what is the color of the sun?</p>
         
          </div>
        </div>
        {/* END DIV */}
        {/* ###################################################### */}
      </div>
    </div>
  )
}


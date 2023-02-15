import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { readConfigFile } from 'typescript'
import "./globals.css";

export default function Page() {
  return (
    <div className='flex flex-col items-center justify-center h-screen px-2 text-white'>
      <h1 className="text-5xl font-bold mb-20">chat gpt messenger</h1>
      <div>
        
        <div>
          <div className='flex flex-col items-center mb-5'>
            {/* sun icon */}
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
      </div>
    </div>
  )
}


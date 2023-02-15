import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { readConfigFile } from 'typescript'

export default function Page() {
  return (
    <div className={styles.container}>
      <h1>chat gpt messenger</h1>
    </div>
  )
}


import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useContext } from 'react'
import myContext from '../src/Context'

export default function Home() {
  const context = useContext(myContext)
  return (
    <div className={styles.container}>
      {context}
    </div>
  )
}

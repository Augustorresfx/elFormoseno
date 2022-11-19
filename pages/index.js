import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  <>
    <Navbar/>
    <Hero/>
  </>
  )
}

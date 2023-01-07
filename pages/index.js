import Head from 'next/head'
import Image from 'next/image'
import AboutUs from '../components/aboutUs'
import ContactForm from '../components/contact'
import Features from '../components/features'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import Products from '../components/products'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  <>
    <Navbar/>

    <Hero/>
    <section id='PorQueElegirnos'>
    <Features/>
  
    </section>
    <section id="Productos">
    <Products/>
    </section>
    <section id="Contactenos">
    <ContactForm/>
    </section>
    <Footer/>
  </>
  )
}

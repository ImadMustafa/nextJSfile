import Head from 'next/head'
import Image from 'next/image'
import { Content, Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import Banner from '../components/Banner'
import Body1 from '@/components/Body1'
import Form from '@/components/Form'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div >
      <Navbar Logoname={"CreoHub"}/>
      <Banner text={"Welcome to task2 site"} imageUrl={'/background2.png'} />
      <Body1 title={"Title Number 1"} text={"Next.js is a very convenient way to make intuitive websites! Next. js is a React framework that supports high-performance web applications through a patchwork of modern tools and features. These building blocks will help you develop sleek React apps with scalable infrastructure, numerous integrations, limitless routing and a better user experience."} imageUrl={'/laptopdesign.png'} />
      <Form formTitle={"Send us an email!"}/>
      <Footer Logoname={"CreoHub"}/>
    </div>
  )
}

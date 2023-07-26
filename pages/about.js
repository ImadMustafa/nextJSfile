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

const About = () => {
    return ( 
        <div>
            <Navbar Logoname={"CreoHub"}/>
            <Banner text={"Get to know us!"} imageUrl={'/background1.jpg'} />
            <Body1 title={"About Us"} text={"At [Website Name], we are passionate about [describe the purpose or mission of the website]. Our goal is to [explain the objectives or services offered]. Whether you're a [target audience or user category], we strive to provide you with [benefits or solutions]."} imageUrl={'/design1.png'} />
            <Footer Logoname={"CreoHub"}/>
        </div>

     );
}
 
export default About;
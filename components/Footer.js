import Link from 'next/link'

const Footer = ({Logoname}) => {
    return ( 
        <footer className="bg-rose-400 text-white text-sm text-center py-4 mt-6">
            <p className="p-3">Copyright 2023 {Logoname}&copy;</p>
            <p className="p-3"><Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/compTest">Information</Link></p>
        </footer>
     );
}
 
export default Footer;
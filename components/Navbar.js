import Link from 'next/link'
import { useRouter } from "next/router";

const Navbar = ({Logoname}) => {
    const router = useRouter();
    return ( <div className='bg-rose-400'>
        
        <nav className=" p-4 flex items-center justify-between 2xl:container mx-auto">
            <div className="text-white text-xl font-bold" class="logo">
                <Link  href="/">{Logoname}</Link>
            </div>
            <div>
                <ul className="flex">
                    <li className={router.pathname == "/" ? "active" : "text-white"}>
                    <Link className='mr-3' href="/">Home</Link>
                    </li>
                    <li className={router.pathname == "/about" ? "active" : "text-white"}>
                    <Link className='mr-3' href="/about">About</Link>
                    </li>
                    <li className={router.pathname == "/information" ? "active" : "text-white"}>
                    <Link className='mr-3' href="/information">Information</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
     );
}
 
export default Navbar;
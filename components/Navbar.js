import Link from 'next/link'

const Navbar = ({Logoname}) => {
    return ( 
        <nav className="bg-rose-400 p-4 flex items-center justify-between">
            <div className="text-white text-xl font-bold" class="logo">
                {Logoname}
            </div>
            <div className="flex">
                <Link className="text-white mr-3" href="/">Home</Link>
                <Link className="text-white mr-3" href="/about">About</Link>
                <Link className="text-white mr-3" href="/information">Information</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
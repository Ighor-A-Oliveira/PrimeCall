import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";






export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-violet-950 w-full min-h-14  text-fuchsia-400">

        <IoMenu className="ml-2 text-2xl md:hidden" />

        <Link className="md:ml-4 lg:ml-16" to='/'>
            <p className="font-jura text-4xl">PrimeCall</p>
        </Link>
        
        <div className="md:flex items-center justify-between hidden md:block">
            <p className="font-jura text-base mr-4">Services</p>
            <p className="font-jura text-base mr-4">About Us</p>
            <p className="font-jura text-base mr-4">Careers</p>
            <p className="font-jura text-base mr-4">Client Testimonials</p>
            <p className="font-jura text-base     ">FAQ</p>
        </div>

        <div className="mr-2 md:mr-4 lg:mr-16 mr-0 md:flex items-center justify-between">
            <button className="text-sm  mr-2 lg:mr-4 hidden md:block bg-fuchsia-400 text-violet-950 w-full rounded-2xl" >
                Contact Us
            </button>
            <TbWorld className="text-4xl mr-2 lg:mr-4 hidden lg:block" />
            <FaSearch className="text-4xl mr-2 lg:mr-4 " />
            <FaCircleUser className="text-4xl hidden lg:block lg:mr-4" />
        </div>
    </nav>
  )
}

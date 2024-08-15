import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="z-50 max-w-[100%] flex items-center justify-around bg-violet-950 w-full min-h-24 text-fuchsia-400 fixed">
      <IoMenu className="md:ml-2 text-2xl md:hidden" />

      <Link className="md:ml-4 lg:ml-16" to="/">
        <p
          className="font-jura text-4xl relative hover:text-white after:absolute 
                            after:left-0 after:right-0 after:bottom-0 after:h-[2px] 
                            after:bg-fuchsia-400 
                            after:scale-x-0
                            hover:after:scale-x-100"
        >
          PrimeCall
        </p>
      </Link>

      <div className="md:flex items-center justify-between hidden md:block">
        <Link className="">
            <p className="font-jura 
                        text-base md:mr-6 lg:mr-10 relative pb-1 
                        hover:text-white after:absolute 
                        after:left-0 after:right-0 after:bottom-0 after:h-[2px] 
                        after:bg-fuchsia-400 
                        after:scale-x-0 
                        hover:after:scale-x-100"
            >
                Services
            </p>
        </Link>
            
        <Link>
            <p className="font-jura 
                        text-base md:mr-5 lg:mr-10 relative pb-1 
                        hover:text-white after:absolute 
                        after:left-0 after:right-0 after:bottom-0 after:h-[2px] 
                        after:bg-fuchsia-400 
                        after:scale-x-0 
                        hover:after:scale-x-100">
                About Us
            </p>
        </Link>

        <Link>
            <p className="font-jura 
                        text-base md:mr-5 lg:mr-10 relative pb-1 
                        hover:text-white after:absolute 
                        after:left-0 after:right-0 after:bottom-0 after:h-[2px] 
                        after:bg-fuchsia-400 
                        after:scale-x-0 
                        hover:after:scale-x-100">
            Careers
            </p>
        </Link>

        <Link>
            <p className="font-jura 
                        text-base md:mr-5 lg:mr-10 relative pb-1 
                        hover:text-white after:absolute 
                        after:left-0 after:right-0 after:bottom-0 after:h-[2px] 
                        after:bg-fuchsia-400 
                        after:scale-x-0 
                        hover:after:scale-x-100">
            Client Testimonials
            </p>
        </Link>

        <Link>
            <p className="font-jura
                        text-base relative pb-1 
                        hover:text-white after:absolute 
                        after:left-0 after:right-0 after:bottom-0 after:h-[2px] 
                        after:bg-fuchsia-400 after:scale-x-0 
                        hover:after:scale-x-100">
            FAQ
            </p>
        </Link>
        
      </div>

      <div className="md:mr-4 lg:mr-16 mr-0 md:flex items-center justify-between">
        <button className="text-sm mr-2 lg:mr-4 hidden md:block hover:bg-white bg-fuchsia-400 text-violet-950 w-full rounded-2xl">
          Contact Us
        </button>
        <FaSearch className="text-4xl mr-2 hover:text-white lg:mr-4 cursor-pointer	" />
        <FaCircleUser className="text-4xl hover:text-white hidden lg:block lg:mr-4 cursor-pointer	" />
      </div>
    </nav>
  );
}

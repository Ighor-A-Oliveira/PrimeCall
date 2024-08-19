import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

//<IoMenu className={`md:ml-2 text-2xl md:hidden transition-transform  `} onClick={() => setOpenMenu(!openMenu)}/>
export default function Navbar() {
  //let openMenu = false;
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    // Disable scrolling when menu is open
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [openMenu]);

  return (
    <>
      <nav className="z-50 max-w-[100%] bg-violet-950 w-full min-h-24 text-fuchsia-400 fixed top-0">
        <div className="flex items-center justify-around min-h-24">
          {openMenu ? <IoMdClose className={`md:ml-2 text-2xl md:hidden transition-transform duration-300`} onClick={() => setOpenMenu(!openMenu)}/> : <IoMenu className={`md:ml-2 text-2xl md:hidden transition-transform duration-300`} onClick={() => setOpenMenu(!openMenu)}/> }
          

          <Link className="md:mr-4 lg:mr-16" to="/">
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
              <p
                className="font-jura 
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
              <p
                className="font-jura 
                    text-base md:mr-5 lg:mr-10 relative pb-1 
                    hover:text-white after:absolute 
                    after:left-0 after:right-0 after:bottom-0 after:h-[2px] 
                    after:bg-fuchsia-400 
                    after:scale-x-0 
                    hover:after:scale-x-100"
              >
                About Us
              </p>
            </Link>

            <Link>
              <p
                className="font-jura 
                    text-base md:mr-5 lg:mr-10 relative pb-1 
                    hover:text-white after:absolute 
                    after:left-0 after:right-0 after:bottom-0 after:h-[2px] 
                    after:bg-fuchsia-400 
                    after:scale-x-0 
                    hover:after:scale-x-100"
              >
                Careers
              </p>
            </Link>

            <Link>
              <p
                className="font-jura 
                    text-base md:mr-5 lg:mr-10 relative pb-1 
                    hover:text-white after:absolute 
                    after:left-0 after:right-0 after:bottom-0 after:h-[2px] 
                    after:bg-fuchsia-400 
                    after:scale-x-0 
                    hover:after:scale-x-100"
              >
                Client Testimonials
              </p>
            </Link>

            <Link>
              <p
                className="font-jura
                    text-base relative pb-1 
                    hover:text-white after:absolute 
                    after:left-0 after:right-0 after:bottom-0 after:h-[2px] 
                    after:bg-fuchsia-400 after:scale-x-0 
                    hover:after:scale-x-100"
              >
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
        </div>
      </nav>
      <div
        className={`fixed top-16 left-0 right-0 z-50 bg-violet-950 overflow-hidden transition-transform duration-300 ${
          openMenu ? "scale-y-100 h-screen" : "scale-y-0 h-0"
        }`}
        style={{ transformOrigin: "top" }}
      >
        <div className="w-[85%] flex justify-start items-start flex-col text-fuchsia-400 p-8 font-jura">
          <Link className="mb-4" to={'q'} onClick={() => setOpenMenu(!openMenu)}>
            Sobre Nós
          </Link>
          <Link className="mb-4" to={'q'} onClick={() => setOpenMenu(!openMenu)}>
            Contato
          </Link>
          <Link className="mb-4" to={'q'} onClick={() => setOpenMenu(!openMenu)}>
            Blog
          </Link>
          <Link className="mb-4" to={'q'} onClick={() => setOpenMenu(!openMenu)}>
            Carreiras
          </Link>
          <Link className="mb-4" to={'q'} onClick={() => setOpenMenu(!openMenu)}>
            Área do Cliente
          </Link>
          <Link className="mb-4" to={'q'} onClick={() => setOpenMenu(!openMenu)}>
            Política de Privacidade
          </Link>
          <Link className="mb-4" to={'q'} onClick={() => setOpenMenu(!openMenu)}>
            Termos de Serviço
          </Link>
        </div>
      </div>
    </>
  );
}

import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { getFooterLinks } from "../../API";



export default function Footer() {
  const icons = [
    {
      icon: <FaSquareXTwitter  className="text-5xl sm:text-4xl text-fuchsia-400 cursor-pointer"/>
    },
    {
      icon: <FaLinkedin className="text-5xl sm:text-4xl text-fuchsia-400 cursor-pointer"/>
    },
    {
      icon: <FaInstagramSquare className="text-5xl sm:text-4xl text-fuchsia-400 cursor-pointer"/>
    },
    {
      icon: <FaFacebookSquare className="text-5xl sm:text-4xl text-fuchsia-400 cursor-pointer"/>
    },
    {
      icon: <AiFillTikTok className="text-6xl sm:text-5xl text-fuchsia-400 cursor-pointer"/>
    },
  ]
  const footerLinks = getFooterLinks();
  return (
    <div className="w-full bg-black text-white flex flex-col items-center min-h-[300px] py-8">
      <div className="sm:w-[90%] flex flex-col items-center sm:items-start sm:flex-row sm:justify-between">
        {/* Main Logo Section */}
        <Link className="sm:mr-8 md:mr-16 lg:mr-28 mt-4 md:mt-8 mb-8 sm:mb-0"  to="/">
          <p className="font-jura text-4xl md:text-3xl lg:text-5xl relative hover:text-white after:absolute 
                after:left-0 after:right-0 after:bottom-0 after:h-[2px] 
                after:bg-fuchsia-400 after:scale-x-0
                hover:after:scale-x-100 text-center">
            PrimeCall
          </p>
        </Link>

        {/* Links Sections */}
        <div className="flex flex-col items-center sm:items-start sm:flex-row sm:justify-between w-full">
          {footerLinks.map((footerLink, index) => (
            <div key={index} className="flex flex-col items-center sm:items-start mb-4 sm:mb-2">
              <div className="sm:h-[48px] font-bold mb-2 text-base lg:text-lg font-sans text-center sm:text-start ">
                {footerLink.title}
              </div>
              {footerLink.links.map((link, linkIndex) => (
                <div className="sm:h-[48px] " key={linkIndex}>
                  <Link className="relative mb-2">
                    <div className="sm:w-[130px] lg:w-auto pb-0.5 after:absolute 
                    after:left-0 after:right-0 sm:after:right-[70px] lg:after:right-0 after:bottom-0 after:h-[2px] 
                    after:bg-fuchsia-400 after:scale-x-0
                    hover:after:scale-x-100 text-center sm:text-start font-sans text-sm sm:text-sm lg:text-base">
                      {link.name}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="w-[90%] h-[125px] flex flex-col sm:flex-row justify-center sm:justify-between">
        <div className="w-full flex items-center text-center flex-col sm:flex-row justify-center md:justify-around ">
          <div className="">
            <Link className="cursor-pointer sm:text-xs sm:mr-0.5">
                  Configurações de cookies
            </Link>
          </div>
          <div>
            <Link className="cursor-pointer sm:text-xs sm:mr-0.5">
              Politicas de privacidade de dados
            </Link>
          </div>
          <div>
            <Link className="cursor-pointer sm:text-xs sm:mr-0.5">
              Codigos e politicas
            </Link>
          </div>
          <div>
            <Link className="cursor-pointer sm:text-xs sm:mr-0.5  ">
              Declaração legal
            </Link>
          </div>
        </div>

        <div className="md:w-[30%] flex justify-center items-center flex-col mt-4">
          <div>
            <p >Siga-nos nas redes sociais:</p>
          </div>

          <div className="flex justify-center items-center pt-1 mt-2 md:mt-0">
            {icons.map((icon, index) => (
              <Link className="" key={index}>
                {icon.icon}
              </Link>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  )
}


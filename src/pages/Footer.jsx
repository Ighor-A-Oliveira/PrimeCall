import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";



export default function Footer() {
  return (
    <div className="w-full bg-black text-white flex flex-col items-center min-h-[300px] py-8">
      <div className="md:w-[87%] sm:w-full flex flex-col items-center sm:flex-row sm:justify-between">
        {/* Main Logo Section */}
        <div className="flex flex-col items-left mb-6 sm:mb-0">
          <Link className="md:mr-24 lg:mr-44" to="/">
            <p
              className="font-jura text-2xl md:text-4xl lg:text-5xl relative hover:text-white after:absolute 
                after:left-0 after:right-0 after:bottom-0 after:h-[2px] 
                after:bg-fuchsia-400 after:scale-x-0
                hover:after:scale-x-100 text-center"
            >
              PrimeCall
            </p>
          </Link>
        </div>

        {/* Links Sections */}
        <div className="flex flex-col items-center sm:flex-row sm:justify-between w-full">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex flex-col items-center md:items-start mb-4 sm:mb-0">
              <div className="font-bold mb-2 text-lg font-sans">Links úteis</div>
              {Array.from({ length: 8 }).map((_, linkIndex) => (
                <>
                  <Link className="relative mb-2">
                    <div className="pb-0.5 after:absolute 
                after:left-0 after:right-0 after:bottom-0 after:h-[2px] 
                after:bg-fuchsia-400 after:scale-x-0
                hover:after:scale-x-100 text-center font-sans" key={linkIndex}>Link {linkIndex + 1}</div>
                  </Link>
                </>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="md:w-[87%] h-[150px] sm:w-full flex mt-6 hidden">
        <div className="w-[65%] sm:w-full flex items-center sm:flex-col md:flex-row sm:justify-between pr-14 ">
          <div className="">
            <Link className="cursor-pointer">
                  Configurações de cookies
            </Link>
          </div>
          <div>
            <Link className="cursor-pointer">
              Politicas de privacidade de dados
            </Link>
          </div>
          <div>
            <Link className="cursor-pointer">
              Codigos e politicas
            </Link>
          </div>
          <div>
            <Link className="cursor-pointer">
              Declaração legal
            </Link>
          </div>
        </div>

        <div className="w-[30%] flex justify-center items-center flex-col hidden">
          <div>
            <p>Siga-nos nas redes sociais:</p>
          </div>

          <div className="flex justify-center items-center ">
            <Link>
              <FaSquareXTwitter  className="text-4xl text-fuchsia-400 cursor-pointer"/>
            </Link>
            <Link>
              <FaLinkedin className="text-4xl text-fuchsia-400 cursor-pointer"/>
            </Link>
            <Link>
              <FaInstagramSquare className="text-4xl text-fuchsia-400 cursor-pointer"/>
            </Link>
            <Link>
              <FaFacebookSquare className="text-4xl text-fuchsia-400 cursor-pointer"/>
            </Link>
            <Link>
              <AiFillTikTok className="text-4xl text-fuchsia-400 cursor-pointer"/>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}


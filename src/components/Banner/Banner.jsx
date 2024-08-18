

export default function Banner() {
  return (
    <div className="bg-black flex justify-center items-center w-full">
        <div className=" min-h-[470px] lg:min-h-[500px] max-w-[80%] flex lg:justify-around items-center w-full flex-col lg:flex-row">
        <p className="text-white mt-36 lg:mt-0 mb-8 lg:mb-0 lg:text-4xl sm:text-base max-w-[90%] text-center">Há 6 anos seguidos uma das melhores empresas para se trabalhar</p>          <img className="max-w-[180px] sm:max-w-[200px] lg:max-w-[600px]" src="/assets/images/gptw.png"  alt="" />
        </div>
    </div>
  )
}



export default function TextAndImage() {
  return (
    <div className="bg-stone-100 min-h-[300px] flex justify-center py-8">
        <div className="flex justify-around items-center max-w-[80%] flex-col lg:flex-row">
        <div className="lg:px-6 text-justify max-w-[100%] lg:max-w-[60%]">
            <p className="text-purple-700 text-2xl md:text-3xl mb-2 font-bold">Sobre a PrimeCall</p>
            <p className="text-base sm:text-lg mb-2">Fundada em 2016, a PrimeCall surgiu com a missão de transformar a experiência do cliente em serviços de telemarketing. Com uma equipe apaixonada por inovação e atendimento de qualidade, a PrimeCall se destacou rapidamente ao adotar tecnologias avançadas e práticas eficientes para proporcionar soluções personalizadas para cada cliente.</p>
            <p className="text-base sm:text-lg mb-2">Nosso compromisso com a excelência e a satisfação do cliente é o que nos diferencia. A PrimeCall tem se consolidado como referência no setor, graças ao nosso enfoque em criar estratégias de comunicação impactantes e ao suporte contínuo que oferecemos para garantir resultados extraordinários.</p>
        </div>
        <div className="mt-8 md:mt-0 max-w-[100%] max-h-auto ">
            <img src="/assets/images/image-main-page-3.jpeg" className="w-full h-full" alt="" />
        </div>
        </div>
    </div>     
  )
}

import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="font-jura min-h-[1000px] max-w-full">
      {/*faixa*/}
      <div className="bg-black flex justify-center items-center w-full">
      <div className=" min-h-[470px] lg:min-h-[500px] max-w-[80%] flex lg:justify-around items-center w-full flex-col lg:flex-row">
        <p className="text-white mt-36 lg:mt-0 mb-8 lg:mb-0 lg:text-4xl sm:text-base max-w-[90%] text-center">Há 6 anos seguidos uma das melhores empresas para se trabalhar</p>
        <img className="max-w-[180px] sm:max-w-[200px] lg:max-w-[600px]" src="/assets/images/gptw.png"  alt="" />
      </div>
      </div>

      {/*conteudo*/}
      <div className="bg-stone-100 min-h-[300px] flex justify-center py-8">
        <div className="flex justify-around items-center max-w-[80%] flex-col lg:flex-row">
          <div className="lg:px-6 text-justify max-w-[100%] lg:max-w-[60%]">
            <p className="text-purple-700 text-2xl md:text-3xl mb-2 font-bold">Sobre a PrimeCall</p>
            <p className="text-base sm:text-lg mb-2">Fundada em 2023, a PrimeCall surgiu com a missão de transformar a experiência do cliente em serviços de telemarketing. Com uma equipe apaixonada por inovação e atendimento de qualidade, a PrimeCall se destacou rapidamente ao adotar tecnologias avançadas e práticas eficientes para proporcionar soluções personalizadas para cada cliente.</p>
            <p className="text-base sm:text-lg mb-2">Nosso compromisso com a excelência e a satisfação do cliente é o que nos diferencia. A PrimeCall tem se consolidado como referência no setor, graças ao nosso enfoque em criar estratégias de comunicação impactantes e ao suporte contínuo que oferecemos para garantir resultados extraordinários.</p>
          </div>
          <div className="mt-8 md:mt-0 max-w-[100%] max-h-auto ">
            <img src="/assets/images/image-main-page-3.jpeg" className="w-full h-full" alt="" />
          </div>
        </div>
      </div>

      
      <div className="h-[180px] md:h-[350px]  bg-violet-950"></div>
      <svg className="block md:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#2e1065" d="M0,96L40,128C80,160,160,224,240,245.3C320,267,400,245,480,208C560,171,640,117,720,117.3C800,117,880,171,960,202.7C1040,235,1120,245,1200,213.3C1280,181,1360,107,1400,69.3L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
      </svg>
      <svg className="md:block hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#2e1065" d="M0,288L12.6,261.3C25.3,235,51,181,76,176C101.1,171,126,213,152,202.7C176.8,192,202,128,227,96C252.6,64,278,64,303,69.3C328.4,75,354,85,379,106.7C404.2,128,429,160,455,154.7C480,149,505,107,531,96C555.8,85,581,107,606,133.3C631.6,160,657,192,682,224C707.4,256,733,288,758,250.7C783.2,213,808,107,834,101.3C858.9,96,884,192,909,240C934.7,288,960,288,985,293.3C1010.5,299,1036,309,1061,282.7C1086.3,256,1112,192,1137,176C1162.1,160,1187,192,1213,202.7C1237.9,213,1263,203,1288,165.3C1313.7,128,1339,64,1364,48C1389.5,32,1415,64,1427,80L1440,96L1440,0L1427.4,0C1414.7,0,1389,0,1364,0C1338.9,0,1314,0,1288,0C1263.2,0,1238,0,1213,0C1187.4,0,1162,0,1137,0C1111.6,0,1086,0,1061,0C1035.8,0,1011,0,985,0C960,0,935,0,909,0C884.2,0,859,0,834,0C808.4,0,783,0,758,0C732.6,0,707,0,682,0C656.8,0,632,0,606,0C581.1,0,556,0,531,0C505.3,0,480,0,455,0C429.5,0,404,0,379,0C353.7,0,328,0,303,0C277.9,0,253,0,227,0C202.1,0,177,0,152,0C126.3,0,101,0,76,0C50.5,0,25,0,13,0L0,0Z"></path>
      </svg>



{/*serviços */}
      <div className="flex justify-center">
        <div className="text-center w-[80%]">
          <p className="text-purple-700 text-2xl md:text-3xl mb-2 font-bold">Nossos serviços</p>
          <p className="text-base sm:text-lg mb-2">Na PrimeCall, oferecemos uma gama completa de serviços projetados para atender às necessidades específicas de cada cliente e garantir a excelência em telemarketing. Nossos serviços incluem:</p>
        </div>
      </div>

      <div className="bg-white w-full flex justify-start items-center overflow-y-auto px-8 py-8 mb-16" >
        {/*Card*/}
        <div className="min-w-[200px] min-h-[300px] mx-4 relative transform transition-transform duration-300 ease-in-out hover:scale-110"> 
          <img className="absolute left-0 z-0 w-full h-full rounded-lg" src="/assets/images/customer-journey-management.webp" alt=""/>
          <p className="absolute left-0 top-[24px] font-sans text-xl text-white font-bold px-4 text-center leading-6">Atendimento ao Cliente</p>
          <p className="absolute left-0 bottom-[85px] font-sans text-md text-white px-4 text-center leading-4">Campanhas para promover produtos e serviços, gerar leads qualificados e aumentar vendas.</p>
          <div className="absolute left-0 right-0 bottom-[24px] h-auto flex justify-center"> 
            <Link className=" w-[100px] text-center py-[10px] bg-violet-950 hover:bg-violet-900 text-white rounded-3xl">Saiba Mais</Link>
          </div>
        </div>
        
        <div className="min-w-[200px] min-h-[300px] mx-4 relative transform transition-transform duration-300 ease-in-out hover:scale-110"> 
          <img className="absolute left-0 z-0 w-full h-full rounded-lg" src="/assets/images/customer-journey-management.webp" alt=""/>
          <p className="absolute left-0 top-[24px] font-sans text-xl text-white font-bold px-4 text-center leading-6">Telemarketing Outbound</p>
          <p className="absolute left-0 bottom-[85px] font-sans text-md text-white px-4 text-center leading-4">Suporte personalizado e resolução de problemas para garantir uma experiência positiva</p>
          <div className="absolute left-0 right-0 bottom-[24px] h-auto flex justify-center"> 
            <Link className=" w-[100px] text-center py-[10px] bg-violet-950 hover:bg-violet-900 text-white rounded-3xl">Saiba Mais</Link>
          </div>
        </div>

        <div className="min-w-[200px] min-h-[300px] mx-4 relative transform transition-transform duration-300 ease-in-out hover:scale-110"> 
          <img className="absolute left-0 z-0 w-full h-full rounded-lg" src="/assets/images/customer-journey-management.webp" alt=""/>
          <p className="absolute left-0 top-[24px] font-sans text-xl text-white font-bold px-4 text-center leading-6">Pesquisas de Satisfação</p>
          <p className="absolute left-0 bottom-[85px] font-sans text-md text-white px-4 text-center leading-4">Coleta e análise de feedback para medir a satisfação dos clientes e identificar áreas de melhoria</p>
          <div className="absolute left-0 right-0 bottom-[24px] h-auto flex justify-center"> 
            <Link className=" w-[100px] text-center py-[10px] bg-violet-950 hover:bg-violet-900 text-white rounded-3xl">Saiba Mais</Link>
          </div>
        </div>

        <div className="min-w-[200px] min-h-[300px] mx-4 relative transform transition-transform duration-300 ease-in-out hover:scale-110"> 
          <img className="absolute left-0 z-0 w-full h-full rounded-lg" src="/assets/images/customer-journey-management.webp" alt=""/>
          <p className="absolute left-0 top-[24px] font-sans text-xl text-white font-bold px-4 text-center leading-6">Geração de Leads</p>
          <p className="absolute left-0 bottom-[85px] font-sans text-md text-white px-4 text-center leading-4">Identificação e qualificação de potenciais clientes para impulsionar o crescimento de vendas</p>
          <div className="absolute left-0 right-0 bottom-[24px] h-auto flex justify-center"> 
            <Link className=" w-[100px] text-center py-[10px] bg-violet-950 hover:bg-violet-900 text-white rounded-3xl">Saiba Mais</Link>
          </div>
        </div>

        <div className="min-w-[200px] min-h-[300px] mx-4 relative transform transition-transform duration-300 ease-in-out hover:scale-110"> 
          <img className="absolute left-0 z-0 w-full h-full rounded-lg" src="/assets/images/customer-journey-management.webp" alt=""/>
          <p className="absolute left-0 top-[24px] font-sans text-xl text-white font-bold px-4 text-center leading-6">Consultoria em Marketing</p>
          <p className="absolute left-0 bottom-[85px] font-sans text-md text-white px-4 text-center leading-4">Desenvolvimento de estratégias de marketing para maximizar o impacto das campanhas de telemarketing</p>
          <div className="absolute left-0 right-0 bottom-[24px] h-auto flex justify-center"> 
            <Link className=" w-[100px] text-center py-[10px] bg-violet-950 hover:bg-violet-900 text-white rounded-3xl">Saiba Mais</Link>
          </div>
        </div>

        <div className="min-w-[200px] min-h-[300px] mx-4 relative transform transition-transform duration-300 ease-in-out hover:scale-110"> 
          <img className="absolute left-0 z-0 w-full h-full rounded-lg" src="/assets/images/customer-journey-management.webp" alt=""/>
          <p className="absolute left-0 top-[24px] font-sans text-xl text-white font-bold px-4 text-center leading-6">Gerenciamento de Campanhas</p>
          <p className="absolute left-0 bottom-[85px] font-sans text-md text-white px-4 text-center leading-4">Planejamento, execução e monitoramento de campanhas de marketing para alcançar objetivos específicos.</p>
          <div className="absolute left-0 right-0 bottom-[24px] h-auto flex justify-center"> 
            <Link className=" w-[100px] text-center py-[10px] bg-violet-950 hover:bg-violet-900 text-white rounded-3xl">Saiba Mais</Link>
          </div>
        </div>

        <div className="min-w-[200px] min-h-[300px] mx-4 relative transform transition-transform duration-300 ease-in-out hover:scale-110"> 
          <img className="absolute left-0 z-0 w-full h-full rounded-lg" src="/assets/images/customer-journey-management.webp" alt=""/>
          <p className="absolute left-0 top-[24px] font-sans text-xl text-white font-bold px-4 text-center leading-6">Treinamento de Equipes</p>
          <p className="absolute left-0 bottom-[85px] font-sans text-md text-white px-4 text-center leading-4">Treinamento e capacitação de equipes de telemarketing para melhorar a eficiência e a eficácia</p>
          <div className="absolute left-0 right-0 bottom-[24px] h-auto flex justify-center"> 
            <Link className=" w-[100px] text-center py-[10px] bg-violet-950 hover:bg-violet-900 text-white rounded-3xl">Saiba Mais</Link>
          </div>
        </div>

        <div className="min-w-[200px] min-h-[300px] mx-4 relative transform transition-transform duration-300 ease-in-out hover:scale-110"> 
          <img className="absolute left-0 z-0 w-full h-full rounded-lg" src="/assets/images/customer-journey-management.webp" alt=""/>
          <p className="absolute left-0 top-[24px] font-sans text-xl text-white font-bold px-4 text-center leading-6">Análise Avançada de Dados</p>
          <p className="absolute left-0 bottom-[85px] font-sans text-md text-white px-4 text-center leading-4">Ferramentas e técnicas para analisar dados complexos, identificar padrões e gerar insights acionáveis</p>
          <div className="absolute left-0 right-0 bottom-[24px] h-auto flex justify-center"> 
            <Link className=" w-[100px] text-center py-[10px] bg-violet-950 hover:bg-violet-900 text-white rounded-3xl">Saiba Mais</Link>
          </div>
        </div>
      </div>


      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E879F9" d="M0,288L40,266.7C80,245,160,203,240,176C320,149,400,139,480,144C560,149,640,171,720,176C800,181,880,171,960,138.7C1040,107,1120,53,1200,37.3C1280,21,1360,43,1400,53.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      <div className="w-full flex justify-center items-center flex-col bg-fuchsia-400 h-[350px]">
        <p className="w-full text-center text-white text-2xl font-bold">Nosso reconhecimento na insdustria</p>
        <div className="w-[80%] flex justify-around items-center">
          <img className="h-[65px] md:h-[135px] w-[50px] md:w-[100px]" src="/assets/images/premio1.png" alt="" />
          <img className="h-[100px] md:h-[200px] w-[100px] md:w-[200px]" src="/assets/images/premio2.png" alt="" />
          <img className="h-[50px] md:h-[100px] w-[100px] md:w-[200px]" src="/assets/images/premio3.png" alt="" />
        </div>
      </div>

{/*Clientes */}
      <div className="flex justify-center mt-16">
        <div className="text-center w-[80%]">
          <p className="text-purple-700 text-2xl md:text-3xl mb-2 font-bold">Nossos clientes</p>
        </div>
      </div>

      <div className="bg-white w-full flex justify-start items-center overflow-y-auto px-8 py-8 mb-16" >
        {/*Card*/}
        <div className="min-w-[200px] min-h-[300px] mx-4 relative transform transition-transform duration-300 ease-in-out hover:scale-110"> 
          <img className="absolute left-0 z-0 w-full h-full rounded-lg" src="/assets/images/customer-journey-management.webp" alt=""/>
          <p className="absolute left-0 top-[24px] font-sans text-xl text-white font-bold px-4 text-center leading-6">Atendimento ao Cliente</p>
          <p className="absolute left-0 bottom-[85px] font-sans text-md text-white px-4 text-center leading-4">Campanhas para promover produtos e serviços, gerar leads qualificados e aumentar vendas.</p>
          <div className="absolute left-0 right-0 bottom-[24px] h-auto flex justify-center"> 
            <Link className=" w-[100px] text-center py-[10px] bg-violet-950 hover:bg-violet-900 text-white rounded-3xl">Saiba Mais</Link>
          </div>
        </div>
        
        <div className="min-w-[200px] min-h-[300px] mx-4 relative transform transition-transform duration-300 ease-in-out hover:scale-110"> 
          <img className="absolute left-0 z-0 w-full h-full rounded-lg" src="/assets/images/customer-journey-management.webp" alt=""/>
          <p className="absolute left-0 top-[24px] font-sans text-xl text-white font-bold px-4 text-center leading-6">Telemarketing Outbound</p>
          <p className="absolute left-0 bottom-[85px] font-sans text-md text-white px-4 text-center leading-4">Suporte personalizado e resolução de problemas para garantir uma experiência positiva</p>
          <div className="absolute left-0 right-0 bottom-[24px] h-auto flex justify-center"> 
            <Link className=" w-[100px] text-center py-[10px] bg-violet-950 hover:bg-violet-900 text-white rounded-3xl">Saiba Mais</Link>
          </div>
        </div>

        <div className="min-w-[200px] min-h-[300px] mx-4 relative transform transition-transform duration-300 ease-in-out hover:scale-110"> 
          <img className="absolute left-0 z-0 w-full h-full rounded-lg" src="/assets/images/customer-journey-management.webp" alt=""/>
          <p className="absolute left-0 top-[24px] font-sans text-xl text-white font-bold px-4 text-center leading-6">Pesquisas de Satisfação</p>
          <p className="absolute left-0 bottom-[85px] font-sans text-md text-white px-4 text-center leading-4">Coleta e análise de feedback para medir a satisfação dos clientes e identificar áreas de melhoria</p>
          <div className="absolute left-0 right-0 bottom-[24px] h-auto flex justify-center"> 
            <Link className=" w-[100px] text-center py-[10px] bg-violet-950 hover:bg-violet-900 text-white rounded-3xl">Saiba Mais</Link>
          </div>
        </div>

        <div className="min-w-[200px] min-h-[300px] mx-4 relative transform transition-transform duration-300 ease-in-out hover:scale-110"> 
          <img className="absolute left-0 z-0 w-full h-full rounded-lg" src="/assets/images/customer-journey-management.webp" alt=""/>
          <p className="absolute left-0 top-[24px] font-sans text-xl text-white font-bold px-4 text-center leading-6">Geração de Leads</p>
          <p className="absolute left-0 bottom-[85px] font-sans text-md text-white px-4 text-center leading-4">Identificação e qualificação de potenciais clientes para impulsionar o crescimento de vendas</p>
          <div className="absolute left-0 right-0 bottom-[24px] h-auto flex justify-center"> 
            <Link className=" w-[100px] text-center py-[10px] bg-violet-950 hover:bg-violet-900 text-white rounded-3xl">Saiba Mais</Link>
          </div>
        </div>

        <div className="min-w-[200px] min-h-[300px] mx-4 relative transform transition-transform duration-300 ease-in-out hover:scale-110"> 
          <img className="absolute left-0 z-0 w-full h-full rounded-lg" src="/assets/images/customer-journey-management.webp" alt=""/>
          <p className="absolute left-0 top-[24px] font-sans text-xl text-white font-bold px-4 text-center leading-6">Consultoria em Marketing</p>
          <p className="absolute left-0 bottom-[85px] font-sans text-md text-white px-4 text-center leading-4">Desenvolvimento de estratégias de marketing para maximizar o impacto das campanhas de telemarketing</p>
          <div className="absolute left-0 right-0 bottom-[24px] h-auto flex justify-center"> 
            <Link className=" w-[100px] text-center py-[10px] bg-violet-950 hover:bg-violet-900 text-white rounded-3xl">Saiba Mais</Link>
          </div>
        </div>

        <div className="min-w-[200px] min-h-[300px] mx-4 relative transform transition-transform duration-300 ease-in-out hover:scale-110"> 
          <img className="absolute left-0 z-0 w-full h-full rounded-lg" src="/assets/images/customer-journey-management.webp" alt=""/>
          <p className="absolute left-0 top-[24px] font-sans text-xl text-white font-bold px-4 text-center leading-6">Gerenciamento de Campanhas</p>
          <p className="absolute left-0 bottom-[85px] font-sans text-md text-white px-4 text-center leading-4">Planejamento, execução e monitoramento de campanhas de marketing para alcançar objetivos específicos.</p>
          <div className="absolute left-0 right-0 bottom-[24px] h-auto flex justify-center"> 
            <Link className=" w-[100px] text-center py-[10px] bg-violet-950 hover:bg-violet-900 text-white rounded-3xl">Saiba Mais</Link>
          </div>
        </div>

        <div className="min-w-[200px] min-h-[300px] mx-4 relative transform transition-transform duration-300 ease-in-out hover:scale-110"> 
          <img className="absolute left-0 z-0 w-full h-full rounded-lg" src="/assets/images/customer-journey-management.webp" alt=""/>
          <p className="absolute left-0 top-[24px] font-sans text-xl text-white font-bold px-4 text-center leading-6">Treinamento de Equipes</p>
          <p className="absolute left-0 bottom-[85px] font-sans text-md text-white px-4 text-center leading-4">Treinamento e capacitação de equipes de telemarketing para melhorar a eficiência e a eficácia</p>
          <div className="absolute left-0 right-0 bottom-[24px] h-auto flex justify-center"> 
            <Link className=" w-[100px] text-center py-[10px] bg-violet-950 hover:bg-violet-900 text-white rounded-3xl">Saiba Mais</Link>
          </div>
        </div>

        <div className="min-w-[200px] min-h-[300px] mx-4 relative transform transition-transform duration-300 ease-in-out hover:scale-110"> 
          <img className="absolute left-0 z-0 w-full h-full rounded-lg" src="/assets/images/customer-journey-management.webp" alt=""/>
          <p className="absolute left-0 top-[24px] font-sans text-xl text-white font-bold px-4 text-center leading-6">Análise Avançada de Dados</p>
          <p className="absolute left-0 bottom-[85px] font-sans text-md text-white px-4 text-center leading-4">Ferramentas e técnicas para analisar dados complexos, identificar padrões e gerar insights acionáveis</p>
          <div className="absolute left-0 right-0 bottom-[24px] h-auto flex justify-center"> 
            <Link className=" w-[100px] text-center py-[10px] bg-violet-950 hover:bg-violet-900 text-white rounded-3xl">Saiba Mais</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

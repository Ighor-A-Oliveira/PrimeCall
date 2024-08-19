//import { Link } from "react-router-dom";
import Accordion, { AccordionItem } from "../components/Accordion/Accordion";
import List from "../components/List/List";
import {getAccordionData, getClientes, getServices} from "../API"
import Banner from "../components/Banner/Banner";
import TextAndImage from "../components/TextAndImage/TextAndImage";
import ColorFiller from "../components/ColorFiller/ColorFiller";
import Awards from "../components/Awards/Awards";
import ContactForm from "../components/ContactForm/ContactForm";


export default function Home() {
  const accordionData = getAccordionData();
  

  return (
    <div className="font-jura min-h-[1000px] max-w-full flex flex-col justify-center">
      {/*faixa*/}
      {/* Maybe implement props to reuse this banner component in other pages */}
      <Banner/>

      {/*conteudo*/}
      {/* Can reuse this component, create props to receive the text, image src and if the flex is row, col or reverse row/col */}
      <TextAndImage/>

      {/* Waves */}
      {/* can reuse this component to accept many dimensions and colors */}
      <ColorFiller/>
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

      {/* Serviços */}
      <div className="bg-white w-full flex justify-start items-center overflow-y-auto px-8 py-8 mb-16">
        <List listItems={getServices()}/>
      </div>
      

      {/* Premios */}
      <Awards/>
      
      {/*Clientes */}
      <div className="flex justify-center mt-16">
        <div className="text-center w-[80%]">
          <p className="text-purple-700 text-2xl md:text-3xl mb-2 font-bold">Nossos clientes</p>
        </div>
      </div>

      {/*Clientes */}
      <div className="bg-white w-full flex justify-around lg:justify-center items-center overflow-y-auto px-8 py-8 mb-16" >
        <List listItems={getClientes()}/>
      </div>



      {/*Accordion */}
      <div className='max-w-full bg-violet-950 flex justify-center py-4'>
        <div className='max-w-[80%] '>
          <Accordion>
            {accordionData.map((accordionRecord) => (
              <AccordionItem key={accordionRecord.value} value={accordionRecord.value} trigger={accordionRecord.trigger}>
                {accordionRecord.text}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      
      {/** Contact FOrm */}
      <div className="w-full h-[800px] flex justify-start items-center bg-pink-bg bg-cover bg-center flex-col py-8">
        <p className="text-2xl md:text-4xl text-white mb-8 max-w-[80%] text-center">Bora criar uma história juntos, basta preencher o formulario de contato</p>
        <div className="border-[1px] border-black border-solid bg-white rounded-lg w-[80%] max-w-[1500px] h-fit p-8">
          <ContactForm/>
        </div>
      </div>

    </div>
  )
}

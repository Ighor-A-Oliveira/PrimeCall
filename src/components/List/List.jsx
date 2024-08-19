import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function List(props) {
  const listItems = props.listItems;
  /* const services = [
    {
      title: "Atendimento ao Cliente",
      description:"Campanhas para promover produtos e serviços, gerar leads qualificados e aumentar vendas.",
      backgroundImage: "/assets/images/customer-journey-management.webp",
    },
    {
      title: "Telemarketing Outbound",
      description:
        "Suporte personalizado e resolução de problemas para garantir uma experiência positiva",
      backgroundImage: "/assets/images/customer-journey-management.webp",
    },
    {
      title: "Pesquisas de Satisfação",
      description:
        "Coleta e análise de feedback para medir a satisfação dos clientes e identificar áreas de melhoria",
      backgroundImage: "/assets/images/customer-journey-management.webp",
    },
    {
      title: "Geração de Leads",
      description:
        "Identificação e qualificação de potenciais clientes para impulsionar o crescimento de vendas",
      backgroundImage: "/assets/images/customer-journey-management.webp",
    },
    {
      title: "Consultoria em Marketing",
      description:
        "Desenvolvimento de estratégias de marketing para maximizar o impacto das campanhas de telemarketing",
      backgroundImage: "/assets/images/customer-journey-management.webp",
    },
    {
      title: "Gerenciamento de Campanhas",
      description:
        "Planejamento, execução e monitoramento de campanhas de marketing para alcançar objetivos específicos.",
      backgroundImage: "/assets/images/customer-journey-management.webp",
    },
    {
      title: "Treinamento de Equipes",
      description:
        "Treinamento e capacitação de equipes de telemarketing para melhorar a eficiência e a eficácia",
      backgroundImage: "/assets/images/customer-journey-management.webp",
    },
    {
      title: "Análise Avançada de Dados",
      description:"Ferramentas e técnicas para analisar dados complexos, identificar padrões e gerar insights acionáveis",
      backgroundImage: "/assets/images/customer-journey-management.webp",
    },
  ]; */

  console.log(listItems);

  return (
    <>
      {listItems.map((item, index) => (
        <div
          key={index} // Adicionando a chave única para cada item
          className="min-w-[200px] min-h-[300px] mx-4 relative transform transition-transform duration-300 ease-in-out hover:scale-110 shadow-lg  rounded-lg  "
        >
          <img
            className="absolute inset-0 object-cover w-full h-full rounded-lg z-0"
            src={item.backgroundImage}
            alt={item.title} // Adicionando um alt mais descritivo
          />

          <div className="absolute inset-0 flex flex-col justify-between p-4 rounded-lg bg-black bg-opacity-35">
            {/* Adicionado fundo opaco */}
            <p className="font-sans text-xl text-white font-bold text-center leading-6">
              {item.title}
            </p>
            <p className="font-sans text-md text-white font-bold text-center leading-4 py-2">
              {item.description}
            </p>
            <div className="flex justify-center mt-4">
              <Link
                to="/more-info" // Adicionando um exemplo de link
                className="w-[100px] text-center py-[10px] bg-violet-950 hover:bg-violet-900 text-white rounded-3xl"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

// Definir as prop types
List.propTypes = {
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      backgroundImage: PropTypes.string.isRequired,
    })
  ).isRequired,
};

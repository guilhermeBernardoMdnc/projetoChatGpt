import { IoIosFitness, IoIosNutrition } from "react-icons/io";
import { AiOutlineCarryOut } from "react-icons/ai";
import "./sobre.css";

function Cards() {
  const items = [
    {
      icon: <IoIosFitness />,
      title: "TREINO PERSONALIZADO",
      desc: "Planos adaptados ao seu objetivo e nível, com acompanhamento especializado.",
    },
    {
      icon: <IoIosNutrition />,
      title: "NUTRIÇÃO",
      desc: "Orientação nutricional para otimizar resultados e melhorar a saúde.",
    },
    {
      icon: <AiOutlineCarryOut />,
      title: "RESULTADOS RÁPIDOS",
      desc: "Treinos de alta performance para alcançar objetivos de forma eficiente.",
    },
  ];

  return (
    <div className="cards-container">
      {items.map((item, index) => (
        <div className="card" key={index}>
          <div className="icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <a href="#">Saiba Mais</a>
        </div>
      ))}
    </div>
  );
}

export default Cards;

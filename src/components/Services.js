import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";


export default function Services() {
   const data = [
      {
         icon: service1,
         title: "Melhores preços",
         subTitle:
            "Pague através de nosso aplicativo e economize milhares e receba recompensas incríveis.",
      },
      {
         icon: service2,
         title: "Seguro Covid",
         subTitle:
            "Temos todos os hotéis curados que têm todas as precauções para um ambiente seguro  e limpo do COVID",
      },
      {
         icon: service3,
         title: "Flexibilidade de Pagamento",
         subTitle:
            " Aproveite o pagamento flexível através do nosso aplicativo e receba recompensas em cada pagamento.",
      },
      {
         icon: service4,
         title: "Encontre o melhor perto de você",
         subTitle:
            "Encontre os melhores hotéis e lugares para visitar perto de você em um único clique.",
      },
   ];
   return (
      <Section id="services">
         {data.map((service, index) => {
            return (
               <div className="service">
                  <div className="icon">
                     <img src={service.icon} alt="" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.subTitle}</p>
               </div>
            );
         })}
      </Section>
   );
}

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: #cfe5f8;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: 2.4rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;


import React from "react";
import styled from "styled-components";
import avatarImage1 from "../assets/avatarImage.jpeg";
import avatarImage2 from "../assets/avatarImage1.jpeg";
import avatarImage3 from "../assets/avatarImage2.jpeg";


class Testimonials extends React.Component {
   render() {

      return (
         <Section id="testimonials">
            <div className="title">
               <h2>Clientes Satisfeitos</h2>
            </div>
            <div className="testimonials">
               <div className="testimonial">
                  <p>
                     Viagem fantástica com a Travellove, roteiro muito gostoso, ônibus de altíssima qualidade, hotel com café da manhã delicioso, guias muito simpáticos e participativos!!
                  </p>
                  <div className="info">
                     <img src={avatarImage1} alt="" />
                     <div className="details">
                        <h4>Luanna Diaz</h4>
                        <span>Chefe de Enfermagem</span>
                     </div>
                  </div>
               </div>
               <div className="testimonial">
                  <p>
                     Sempre com ótimos preços, guias muito profissionais, sem dúvidas uma das melhores empresas de turismo que já conheci! Recomendo pra todos que curtem viajar, e gostam de ter um contato maior com a natureza.
                  </p>
                  <div className="info">
                     <img src={avatarImage2} alt="" />
                     <div className="details">
                        <h4>Christian Martins</h4>
                        <span>Web Designer</span>
                     </div>
                  </div>
               </div>
               <div className="testimonial">
                  <p>
                     Equipe fantástica, os guias eram experientes e auxiliaram todos durante todo o percurso, a experiência foi fantástica a paisagem realmente superou as expectativas.
                  </p>
                  <div className="info">
                     <img src={avatarImage3} alt="" />
                     <div className="details">
                        <h4>Aisha Sheth</h4>
                        <span>Influencer Digital</span>
                     </div>
                  </div>
               </div>
            </div>
         </Section>
      );

   }
}

export default Testimonials;

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: #cfe5f8;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;

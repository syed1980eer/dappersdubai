import React from 'react';
import styled from 'styled-components';
import service_1 from '../assets/service_1.png';
import service_2 from '../assets/service_2.png';
import service_3 from '../assets/service_3.jpg';
import service_4 from '../assets/service_4.jpg';
import service_6 from '../assets/service_6.jpg';
import service_7 from '../assets/service_7.jpg';
import play from '../assets/play_3.png';
import Title from './Title';
import { useScroll } from '../components/useScroll';
import { motion } from 'framer-motion';
import { servicesAnimations } from "animation";

function Services () {
  const [element, controls] = useScroll();
  const data = [
    {
      type: "Hair Style",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi perferendis.",
      image: service_1,
    },
    {
      type: "Blow Dry",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi perferendis.",
      image: service_2,
    },
    {
      type: "Beard Style",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi perferendis.",
      image: service_3,
    },
    {
      type: "Foot Spa",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi perferendis.",
      image: service_4,
    },    
    {
      type: "Body Massage",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi perferendis.",
      image: service_6,
    },
    {
      type: "Moroccan Bath",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi perferendis.",
      image: service_7,
    },
  ];
  return <Section id='services' ref={element}>
    <Title value="services"/>
    <div className="services">
      {
        data.map(({type,text,image}, index) => {
          return (
            <motion.div className="services__service"
              variants={servicesAnimations}
              transition={{ delay: 0.03, type: "tween", duration: 0.5 }}
              animate={controls} 
            >
              <div className="services__service__image">
                <img src={image} alt="Service" />
              </div>
              <div className="services__service__title">
                <span>0{index + 1}</span>
                <h2>{type}</h2>
              </div>
              <p className="services__service__description">{text}</p>
              <img src={play} alt="Read More..." />
            </motion.div>
          )
        })
      }
    </div>
  </Section>  
}

const Section = styled.section`
  min-height: 100vh;
  .services{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 100%;
    margin: 0 14rem;
    margin-top: 2rem;
    gap: 5rem;
    &__service{
      padding: 1rem;
      &:nth-of-type(2){
        background-color: var(--primary-color);
        .services__service__title{
          span{
            color: #fff;            
          }          
        }
        .services__service__description{
            color: #fff;
        }
      }
      img{
        cursor: pointer;
      }
      &__image{
        margin-bottom: 2rem;
      }
      &__title{
        span{
          color: var(--primary-color);
          font-weight: bolder;
        }
        h2{
          font-size: 3rem;
          line-height:2.5rem;
          margin-top: 1rem;
          margin-bottom: 2rem;
          color: var(--secondary-color);
        }
      }
      &__description{
        color: var(--primary-color);
        margin-bottom: 2rem;
      }
    } 
  }
  @media screen and (min-width: 1081px) and (max-width: 1370px){
    .services{
      display: grid;
      grid-template-columns: 350px 350px 350px;
      align-items: center;
      height: 100%;
      margin: 0 14rem;
      margin-top: 2rem;
      gap: 1rem;
      &__service{
        padding: 1rem;
        width: 80%;
        &:nth-of-type(2){
          background-color: var(--primary-color);
          .services__service__title{
            span{
              color: #fff;            
            }          
          }
          .services__service__description{
              color: #fff;
          }
        }
        img{
          cursor: pointer;
        }
        &__image{
          margin-bottom: 2rem;
          img{
            cursor: pointer;
            max-height: 100% !important;
            max-width: 100% !important;
          }
        }
        &__title{
          span{
            color: var(--primary-color);
            font-weight: bolder;
          }
          h2{
            font-size: 2rem;
            line-height:2.5rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
            color: var(--secondary-color);
          }
        }
        &__description{
          color: var(--primary-color);
          margin-bottom: 1rem;
        }
      } 
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .services {
      margin: 12rem 0 0 0;
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 0 2rem;
      &__service{
        img{
          cursor: pointer;
          max-height: 100% !important;
          max-width: 100% !important;
        }
        &__image{
          margin-bottom: 1rem;
        }
        &__title{
          h2{
            font-size: 1.5rem;
            line-height:2.5rem;
            margin-top: 0.2rem;
            margin-bottom: 0.2rem;
            color: var(--secondary-color);
          }
        }
        &__description{
          margin-bottom: 1rem;
        }
      }
    }
  }
`;

export default Services
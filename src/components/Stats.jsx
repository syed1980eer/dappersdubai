import React from 'react';
import milestone1 from '../assets/milestone1.png';
import milestone2 from '../assets/milestone2.png';
import milestone3 from '../assets/milestone3.png';
import milestone_bg from '../assets/milestone_bg.png';
import styled from 'styled-components';
import { useScroll } from '../components/useScroll';
import { motion } from 'framer-motion';
import { statsAnimations } from "animation";
// import CountUp from 'react-countup';

function Stats () {
  const [element, controls] = useScroll();
  const stats = [
    {
        image: milestone1,
        data:  "Client Served",
        amount: "657",
    },
    {
        image: milestone2,
        data:  "Experience in months",
        amount: "50",
        // amount: "50+",
    },
    {
        image: milestone3,
        data:  "Clients Reviews",
        amount: "3.4",
        // amount: "3.4k",
    },
  ]
  return <Section id='stats' ref={element}>
    <div className="background">
        <img src={milestone_bg} alt="Milestone Background" />
    </div>
    <motion.div className="milestones"
       variants={statsAnimations} animate={controls} 
       transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
    >
        {stats.map(({ image, data, amount }) => {
            return (
                <div className="milestone">
                    <p>{amount}</p>
                    {/* <p><CountUp end={amount}></CountUp></p> */}
                    <span>{data}</span>   
                    <img src={image} alt="Milestone" />                 
                </div>
            );
        })}
    </motion.div>
  </Section>  
}

const Section = styled.section`
  height: 100vh;
  background-color: var(--primary-color);
  padding: 0 10rem;
  position: relative;

  .background{
    position: absolute;
    left: 0;
    bottom: -30%;
    img{
        z-index: 2;
        height: 60rem;
    }
  }
  .milestones{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    color: #fff;
    align-items: center;
    height: 100%;
    .milestone{
        z-index: 20;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        p{
            font-size: 5rem;
            font-weight: bolder;
            line-height: 3rem;
        }
        span{
            text-transform: uppercase;
            color: #ffffffc7;
        }
        img{
            height: 8rem;
        }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) { 
    padding: 5rem 2rem;
    min-height: 100ch;
    height: 100%;
    .background {
        display: none;
    }
    .milestones {
        grid-template-columns: 1fr;
        gap: 5rem;
    }
  }
`;

export default Stats
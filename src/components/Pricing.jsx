import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import pricing1 from '../assets/pricing1.png';
import pricing2 from '../assets/pricing2.png';
import { Fragment } from 'react/cjs/react.production.min';
import play from '../assets/play_1.png';
import { useScroll } from '../components/useScroll';
import { motion } from 'framer-motion';
import { pricingAnimation } from "animation";

function Pricing () {
  const [element, controls] = useScroll();
  const plans = [
    {
      name: "DAPPERS - Basic",
      price: 100,
    },
    {
      name: "DAPPERS - Regular",
      price: 200,
    },
    {
      name: "DAPPERS - Pro",
      price: 250,
    },    
  ];

  const data = [
    {
      id: "D-Bsc 1",
      value: "Haircut = AED-20",
      type: "DAPPERS Basic"
    },
    {
      id: "D-Bsc 2",
      value: "Haircut, Head W/B-dry = AED-30",
      type: "DAPPERS Basic"
    },
    {
      id: "D-Bsc 3",
      value: "Haircut, Head W/B-dry with Beard = AED-40",
      type: "DAPPERS Basic"
    },

    {
      id: "D-Med 1",
      value: "Haircut, Beard & Mani/Pedi, = AED-65",
      type: "DAPPERS Regular"
    },
    {
      id: "D-Med 2",
      value: "Haircut, Beard & Mani/Pedi, Head W/B-dry = AED-85",
      type: "DAPPERS Regular"
    },
    {
      id: "D-Med 3",
      value: "Haircut, Beard, Exp. Facial, Mani/Pedi, Head W/B-dry = AED-100",
      type: "DAPPERS Regular"
    },

    {
      id: "D-Pro 1",
      value: "D-Med 3 plus full facial or hair dye = AED-150",
      type: "DAPPERS Pro"
    },
    {
      id: "D-Pro 2",
      value: "D-Med 3 plus body massage  = AED-185",
      type: "DAPPERS Pro"
    },
    {
      id: "D-Pro 3",
      value: "D-Pro 1 plus body massage = AED-230",
      type: "DAPPERSdf Pro"
    },
  ]

  return <Section id='pricing' ref={element}>
    <Title value="pricing"/>
    <div className="background">
      <img src={pricing1} alt="background" className='bg1' />
      <img src={pricing2} alt="background" className='bg2' />
    </div>
    <div className="pricing__title">
      <h3>Select the DAPPERS package which suites you!</h3>
      <h1>DAPPERS Pricing</h1>
    </div>
    <div className="pricing">
      {plans.map(({ name, price }, index) => {
        return(
          <motion.div className="pricing__plan" key={index}
            variants={pricingAnimation} animate={controls} transition={{ delay: 0.09, type: "tween", duration: 0.8 }}
          >
            <div className="pricing__plan__name">
              <h2>{name}</h2>
              <div className="pricing__plan__name__price">
                <span>AED</span>
                <p>{price}</p>
              </div>
            </div>
            <div className="pricing__plan__content">
              <ul className={`pricing__plan__content__features ${name}`}>
                {data.map(({ id, value, type }, index2) => {
                  return(
                    <Fragment key={index2}>
                      {name === "DAPPERS - Basic" ? (
                        type === name ? (
                          <li>{value}</li>
                        ) : (
                          <li className='line'>{value}</li>
                        )
                      ) : name === "DAPPERS - Regular" ? (
                        type === "DAPPERS Basic" || type === name ? (
                          <li>{value}</li>
                        ) : (
                          <li className='line'>{value}</li>
                        )
                      ) : (
                        name === "DAPPERS - Pro" && <li>{value}</li>
                      )}
                    </Fragment>
                  );
                })}
                <ul>
                  <div className="pricing__plan__content__actions"><br />
                    <span><strong>Book Appointment Now</strong></span>
                    <img src={play} alt="Book Appointment Now" />
                  </div>
                </ul>
              </ul>
            </div>
          </motion.div>
        )
      })}
    </div>
  </Section>  
}

const Section = styled.section`
  min-height: 100vh;
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
  .background{
    .bg1{
      position: absolute;
      top: -60%;
      left: -5%;
      z-index: -1;
    }
    .bg2{
      position: absolute;
      right: 0;
      bottom: 5rem;
    }
  }
  .pricing__title{
    margin: 2.5rem 16rem 3rem 16rem;
    h3{
      color: var(--secondary-color);
      text-transform: uppercase;
      letter-spacing: 0.2rem;
    }
    h1{
      color: var(--primary-color);
      font-size: 2rem;
      letter-spacing: 0.1rem;
    }
  }
  .pricing{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0 14rem;
    &__plan{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      &:nth-child(2){
        .pricing__plan__content{
          padding: 0 5rem;
          border-left: 0.2rem solid var(--primary-color);
        }
      }
      &:nth-child(3){
        .pricing__plan__content{
          padding: 0 5rem;
          border-left: 0.2rem solid var(--primary-color);
        }
      }      
      &__name {
        background-color: var(--primary-color);
        width: 15rem;
        height: 15rem;
        border-radius: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #fff;
        h2 {
          font-size: 1.2rem;
          line-height: 1.3rem;
        }
        &__price {
          color: #fff;
          display: flex;
          position: relative;
          span {
            position: absolute;
            top: 1rem;
            left: -3rem;
            font-size: 1.3rem;
          }
          p {
            font-size: 4rem;
            font-weight: bold;
            color: var(--secondary-color);
          }
        }
      }
      &__content {
        &__features {
          list-style-type: none;
          text-align: center;
          color: var(--primary-color);
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          .line {
            text-decoration: line-through;
          }
          margin-bottom: 2rem
        }
        &__actions {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: var(--primary-color);
          gap: 0.5rem;
          span {
            text-transform: uppercase;
          }
        }
      }
    }
  }
@media screen and (min-width: 1081px) and (max-width: 1370px){
  .background{
    .bg1{
      position: absolute;
      top: -50%;
    }
  }  
  .pricing__title{
    margin-top: 1rem !important;
  }
  .pricing{
    &__plan{
      &:nth-child(2){
        .pricing__plan__content{
          margin: 0 2rem;
          padding: 0 5rem;
          border-left: 0.2rem solid var(--primary-color);
        }
      }               
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) { 
  padding: 1rem;
  .pricing__title {
    margin: 0;
    padding: 0 2rem;
    text-align: center;
    h2 {
      font-size: 1.3rem;
    }
  }
  .background {
    display: none;
  }
  .pricing {
    grid-template-columns: 1fr;
    padding: 1rem;
    gap: 4rem;
    &__plan {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      &__name {
        height: 10rem;
        width: 10rem;
        h2 {
          font-size: 0.8rem;
        }
        &__price {
          span{            
            padding-left: 1.5rem;
          }
          p {
            font-size: 2.5rem;            
            padding-left: 1.5rem;
          }
        }
      }
      &:nth-child(2) {
        .pricing__plan__content {
          padding: 0rem;
          border: none;
        }
      }
      &:nth-child(3){
        .pricing__plan__content{
          padding: 0;
          border: none;
        }
        &__actions{
          img{
            box-shadow: 0 8px 35px 5px rgb(222, 221, 176);
          }
        }
      }
    }
  }
}
`;
export default Pricing
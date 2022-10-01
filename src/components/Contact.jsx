import React from 'react';
import styled from "styled-components";
// import Title from './Title';
import { useScroll } from '../components/useScroll';
import { motion } from 'framer-motion';
import { contactAnimation } from "animation";

function Contact () {
  const [element, controls] = useScroll();
  return <Section id='contact' ref={element}>
    {/* {/* <Title className='contact_heading' value='contact'/> */}
      <h1 className='contact_heading'>Contact</h1>
    <motion.div className="contact" variants={contactAnimation} animate={controls} transition={{ delay: 0.09, type: "tween", duration: 0.8 }}>
      <div className="contact__title">
        <p>Say Hello to us...</p>
        <h2>Reach out quickly!</h2>
      </div>
      <div className="contact__data">
        <div className="contact__data__description">
          <h4>Just to say Hi!</h4>
          <p>If you have any queries or comment, just fill out below details.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus numquam quia.</p>
          <div>
            <p>
              <strong>Address:</strong> Shop # 000, 1st floor, Hudaiba Mall, Dubai UAE.
            </p>
            <p>
              <strong>Email:</strong> dappers-dxb@gmail.com
            </p>
            <p>
              <strong>Website:</strong> dappers-dxb.com
            </p>
          </div>
        </div>
        <div className="contact__data__form">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email' />
          <textarea placeholder='Your Message'></textarea>
          <button>Send</button>
        </div>
      </div>
    </motion.div>
  </Section>
  
}

const Section = styled.section`
  .contact_heading{
    margin-top: 60rem;
    color: red;
    position: absolute;
    transform: translateX(-34%) translateY(-38vw) rotate(270deg);
    font-size: 6rem;
    text-transform: uppercase;
    color: var(--secondary-color);
    font-weight: 400;
    @media screen and (min-width: 280px) and (max-width: 1080px) {
      display: none;
    }
  }
  min-height: 80vh;
  .contact{
    color: var(--primary-color);
    margin: 0 18rem;
    &__title{
      margin  : 6rem 0 2rem 0;
      p{
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        color: var(--primary-color);
      }
      h2{
        font-size: 2rem;
        color: var(--secondary-color);
      }
    }
    &__data{
      display: grid;      
      grid-template-columns: 0.5fr 0.4fr;
      gap: 4rem;
      &__description{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h4{
          font-size: 1.5rem;
        }
        p{
          letter-spacing: 0.1rem;
          text-align: justify;
          margin-top: 20px;
        }
        div{
          p{
            strong{
              text-transform: uppercase;
            }
          }
        }
      }
      &__form{
        display: flex;
        flex-direction: column;        
        align-items: center;
        gap: 2rem;
        input, textarea{
          text-transform: uppercase;
          border: none;
          border-bottom: 0.1rem solid var(--secondary-color);
          width: 100%;
          color: var(--secondary-color);
          letter-spacing: 0.05rem;
          padding-bottom: 0.7rem; 
          &:focus{
            outline: none;
          }
          &::placeholder{
            color: var(--secondary-color);
          }
        }
        textarea{
          width: 100%;
          height: 50%;
          resize: none;
        }
        button{
          width: 100%;
          background-color: transparent;
          border: 0.1rem solid var(--secondary-color);
          height: 3rem;
          color: var(--secondary-color);
          text-transform: uppercase;
          font-size: 1.1rem;
          letter-spacing: 0.1rem;
          /* font-weight: bold; */
          cursor: pointer;
          transition: 0.5s ease-in-out;
          &:hover{
            background-color: var(--secondary-color);
            color: #fff;
          }
        }
      }
    }
  }
  @media screen and (min-width: 1081px) and (max-width: 1370px){
    .contact_heading{
      margin-top: 45rem;
    }
    .contact{
      margin: 0 10rem 2rem 15rem;
      &__data{
      display: grid;      
      grid-template-columns: 0.7fr 0.6fr;
      gap: 4rem;
      &__description{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h4{
          font-size: 1.5rem;
        }
        p{
          letter-spacing: 0.1rem;
          text-align: justify;
          margin-top: 1.5rem;
        }
        div{
          p{
            strong{
              text-transform: uppercase;
            }
          }
        }
      }
      &__form{
        display: flex;
        flex-direction: column;        
        align-items: center;
        gap: 2rem;
        input, textarea{
          text-transform: uppercase;
          border: none;
          border-bottom: 0.1rem solid var(--secondary-color);
          width: 100%;
          color: var(--primary-color);
          letter-spacing: 0.05rem;
          padding-bottom: 0.7rem; 
          &:focus{
            outline: none;
          }
          &::placeholder{
            color: var(--secondary-color);
          }
        }
        textarea{
          width: 100%;
          height: 50%;
          resize: none;
        }
        button{
          width: 100%;
          background-color: transparent;
          border: 0.1rem solid var(--secondary-color);
          height: 3rem;
          color: var(--secondary-color);
          text-transform: uppercase;
          font-size: 1.1rem;
          letter-spacing: 0.1rem;
          /* font-weight: bold; */
          cursor: pointer;
          transition: 0.5s ease-in-out;
          &:hover{
            background-color: var(--secondary-color);
            color: #fff;
          }
        }
      }
    }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) { 
  .contact {
    margin: 1rem;
    padding: 0 1rem;
    &__title {
      margin: 0;
      text-align: center;
      p {
        font-size: 0.8rem;
      }
      h2 {
        font-size: 1.3rem;
      }
    }
    &__data {
      grid-template-columns: 1fr;
      margin: 0;
      p {
        text-align: left;
      }
      &__form {
        button {
          height: 6rem;
        }
      }
    }
  }
}
`;

export default Contact
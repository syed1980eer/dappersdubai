import React from 'react';
import styled from 'styled-components';
import home from '../assets/home-2.png';
import play from '../assets/play_1.png';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { homeAnimation, homeInfoAnimation } from "animation";


function Home() {
  return (
    <Section id="home">
      <Navbar />
      <motion.div className="home"
      variants={homeAnimation}
      transition={{ delay: 0.3, duration: 0.6, type: "tween"}}
      >
        <div className="content">
          <div className="title">
            <h1>DAPPERS</h1>
            <hr className='line' /><br />
            <small className='tag'>Appearance Matters...</small>
          </div>
          <div className="subTitle">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi perferendis.</p>
          </div>
          <img src={play} alt="Play Button" />
        </div>
      </motion.div>

      <motion.div className="info"
        variants={homeInfoAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween"}}
      >
        <div className="grid">
          <div className="col">
            <strong>For Appointments</strong>
            <p>Call / Whatsapp / Email</p>
          </div>
          <div className="col">
            <strong>Mobile No.</strong>
            <p>+971-555555555</p>
          </div>
          <div className="col">
            <strong>Email</strong>
            <p>dappers-dxb@gmail.com</p>
          </div>
          <div className="col">
            <strong>Services</strong>
            <p>Hair Cut</p>
            <p>Beard Shave & More...</p>
          </div>
          <div className="col">
            <strong>Address</strong>
            <p>Hudaiba Mall</p>
            <p>Dubai, UAE.</p>
          </div>
          <div className="col">
            <strong>Working Hours</strong>
            <p>10am to 10pm</p>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

const Section = styled.section`
  background: url(${home}) no-repeat center;
  min-height: 100vh;
  background-size: cover;
  position: relative;
  .home{
    height: 100%;
    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 60%;
      color: #fff;
      gap: 1.2rem;
      margin-top: 8rem;
      padding-left: 18rem;
      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
        }
        .line{
          width: 12.5rem;
          float: right;
        }
        .tag{
          float: right;
          margin-top: -1rem;
          font-family: Calibri;
          font-size: 1.2rem;
          font-weight: lighter;
          letter-spacing: 1.5px;
          color: red;
        }
      }
      .subTitle {
        p {
          width: 70%;
          margin-bottom: 2rem;
        }
      }
      img{
        margin-top: -2rem;
      }
    }
  }
  .info {
    position: absolute;
    bottom: 1rem;
    right: 0;
    background-color: var(--transparent-color);
    ${'' /* background-color: var(--secondary-color); */}
    padding: 2rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      color: #fff;
    }
  }
  @media screen and (min-width: 1081px) and (max-width: 1370px){
    .info {
    position: absolute;
    bottom: 1rem;
    right: 0;
    background-color: var(--transparent-color);
    ${'' /* background-color: var(--secondary-color); */}
    padding: 2rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      color: #fff;
    }
  }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .home {
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
    }
  }
`;

export default Home
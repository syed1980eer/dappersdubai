import React from 'react';
import styled from 'styled-components';
// import Title from './Title';
import about from '../assets/about.png';
import play from '../assets/play_1.png';
import bg_about from '../assets/bg_about.png';

function About () {
  const data = [
    {
      type: "What makes us different?",
      text: "Our PASSION & DEDICATION. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi perferendis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio blanditiis soluta maiores sunt voluptatibus, quia reprehenderit vitae, molestiae, culpa alias accusantium tempore itaque minima natus quod placeat consectetur eveniet odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi perferendis.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio blanditiis soluta maiores sunt voluptatibus, quia reprehenderit vitae, molestiae, culpa alias accusantium tempore itaque minima natus quod placeat consectetur eveniet odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi perferendis.",
      image: about,
    },   
  ];
  return <Section id='about'>
    {/* <Title className='title' value="about"/> */}
    {
      data.map(({type,text,image}, index) => {
        return (          
          <div className="about">
            <h1 className='abt'>About</h1>
            <div className="about__image">
              <img src={about} alt="About" />
            </div>
            <div className="about__title">
              {/* <span>0{index + 1}</span> */}
              <h2>{type}</h2>
            </div>
            <p className="about__description">{text}</p>
            <img src={play} alt="Read More..." /><br /><br />
        </div>  
        )    
      })
    }
  </Section>
}

const Section = styled.section`
background: url(${bg_about}) no-repeat center;
.abt{
  top: 55rem !important;
  color: red;
  position: absolute;
  transform: translateX(-92%) translateY(20vw) rotate(-90deg);
  font-size: 6rem;
  margin-left: -2rem;
  text-transform: uppercase;
  color: var(--secondary-color);
  font-weight: 400;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: none;
  }
}
min-height: 50vh;
  .about{
    /* display: block; */
    align-items: center;
    height: 100%;
    margin: 0 16rem;
    padding-top: 5rem;
    .about__title{
      span{
        color: var(--primary-color);
      }
    }
    .about__description{
      color: #fff;
      margin-bottom: 2rem;      
    }
    .about__description img{
      margin-bottom: 3rem;
    }
    &__image{
    padding: 2rem;
    margin-bottom: 3rem;           
    } 
    
    span{
      color: #fff;
      font-weight: bolder;
    }
    h2{
      font-size: 3rem;
      line-height:3rem;
      margin-bottom: 3rem;
      color: var(--secondary-color);
    }    
  }
  @media screen and (min-width: 1081px) and (max-width: 1370px){
    .about{
      margin: -1.2rem 10rem 0 16rem;
      padding-top: 2rem;      
    }
    .abt{
      margin-top: -15rem;
    }
    .about__title{
      h2{
        font-size: 2.5rem;
        line-height:3rem;
        margin-top: -1.5rem;
        margin-bottom: 3rem;
        color: var(--secondary-color);
      }   
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: -12rem -20rem;
    .about{
      margin: 5rem 10rem 0 16rem;
      padding-top: 3rem; 
      .about__image{
        margin-bottom: 0;
      }
      img{
        margin-top: 2rem;
        margin-left: 5.3rem;
        margin-bottom: 0;
        padding-top: 2rem;
        height: 8%;
        width: 8%;
      } 
      h2{
        font-size: 1.5rem;
        line-height:3rem;
        margin: 0 0 0 5.5rem;
        color: var(--secondary-color);
      } 
      .about__description{
        font-size: 0.8rem;
        line-height: 1.1rem;
        padding-left: 5.5rem;
        padding-right: 10rem;
        img{
          height: 50px;
          width: 50px;
        }
      }
           
    }
    
  }
`;

export default About
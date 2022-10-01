import React, { useState } from 'react';
import styled from 'styled-components';
// import logo from '../assets/dappers_logo.svg';
import logo from '../assets/new_final_logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
// import {  navLinks } from '../constants';
import { useScroll } from '../components/useScroll';
import { motion } from 'framer-motion';
import { navAnimation } from "animation";

function Navbar() {
  const [isNavOpen,setIsNavOpen] = useState(false);
  const [element, controls] = useScroll();
  return <Nav ref={element} className='w-full flex py-6 justify-between items-center navbar'
  variants={navAnimation}
  transition={{ delay: 0.1 }}
  animate={controls} 
  state={isNavOpen ? 1 : 0}
  >
    <div className="brand__container">
      <a href="#" className='brand'>
        <img src={logo} alt="logo"/>
      </a>  
      <div className="toggle">
        {isNavOpen ? (
          <MdClose onClick={ () => setIsNavOpen(false)} />
        ) : (
          <GiHamburgerMenu
            onClick={ (e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
            />
        )}
      </div>
    </div>
    <div className={`links ${isNavOpen ? "show" : ""}`}>
      {/* <ul >
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul> */}
      <ul>
        <li className="active">
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#stats">stats</a>
        </li>
        <li>
          <a href="#pricing">pricing</a>
        </li>
        <li>
          <a href="#testimonials">testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </Nav>
}

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;
  color: #fff;
  padding-top: 2rem;
  .brand__container {
    margin: 0 2rem;
    .toggle {
      display: none;
    }
  }
  img{
    margin-top: -20px;
    margin-left: -30px;
    height: 150px;
    width: 150px;
  }
  .links {
    ul {
      list-style-type: none;
      display: flex;
      gap: 2rem;
      .active{
        a {
          border-bottom: 0.2rem solid var(--secondary-color);
        }
      }
      li {
        a {
          color: #fff;
          text-decoration: none;
          font-weight: 400;
          font-size: 1.1rem;
          text-transform: uppercase;
        }
      }
    }
  }
  @media screen and (min-width: 1081px) and (max-width: 1370px) {
    margin: 0;
    position: relative;  
    img{
      margin-top: -20px;
      margin-left: -10px;
      height: 150px;
      width: 150px;
    }  
    .links {
    ul {
      list-style-type: none;
      display: flex;
      gap: 0.2rem;
      .active{
        a {
          border-bottom: 0.2rem solid var(--secondary-color);
        }
      }
      li {
        a {
          color: #fff;
          text-decoration: none;
          font-weight: 400;
          font-size: 0.8rem !important;
          text-transform: uppercase;
          margin-right: 1rem;
        }
      }
    }
  }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0;
    position: relative;
    img{
      margin-top: -25px ;
      margin-left: -25px;
      height: 80px;
      width: 80px;
    } 
    .brand__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        padding-right: 1rem;
        display: block;
        z-index: 1;
      }
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "100%" : "0%")};
      height: 100vh;
      background-color: var(--secondary-color);
      opacity: 0;
      visibility: hidden;
      transition: 0.4s ease-in-out;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
      }
    }
  }  
`;

export default Navbar;
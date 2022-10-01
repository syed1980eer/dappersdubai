import React, { useState } from 'react';
import styled from "styled-components";
import { FaChevronUp } from 'react-icons/fa';

function ScrollToTop () {
  const [visible, setVisible] = useState(false);
  window.addEventListener('scroll', ()=> {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false)
  });
  return <Div>
    <a href="#" className={`${visible ? "block" : "none"}`}>
      <FaChevronUp/>
    </a>    
  </Div>  
}

const Div = styled.div`
  max-width: 100vw;
  .none{
    opacity: 0;
    visibility: hidden;
  }
  a{
    position: fixed;
    bottom: 65px;
    right: 40px;
    background-color: var(--secondary-color);
    padding: 1rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 11;
    transition: 0.4s ease-in-out;
    box-shadow: 0 8px 35px 5px rgb(222, 221, 176);
  svg {
    color: #fff;
    font-size: 1.3rem
  }  
  }
  @media screen and (min-width: 280px) and (max-width: 1080px){    
    a{
      bottom: 30px !important;
      right: 20px !important;
    }
  }
`;

export default ScrollToTop
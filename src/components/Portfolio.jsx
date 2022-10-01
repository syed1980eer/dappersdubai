import React from 'react';
import styled from 'styled-components';
import portfolio1 from '../assets/portfolio1.jpg';
import portfolio2 from '../assets/portfolio2.jpg';
import portfolio3 from '../assets/portfolio3.jpg';
import portfolio4 from '../assets/portfolio4.png';
import portfolio5 from '../assets/portfolio5.jpg';
import portfolio6 from '../assets/portfolio6.jpg';
import portfolio7 from '../assets/portfolio7.jpg';
import portfolio8 from '../assets/portfolio8.jpg';
import portfolio9 from '../assets/portfolio9.jpg';
import portfolio10 from '../assets/portfolio10.jpg';
import loadmore from '../assets/loadmore.png';
import { useScroll } from '../components/useScroll';
import { motion } from 'framer-motion';
import { portfolioAnimations } from "animation";

function Portfolio() {
    const [element, controls] = useScroll();
    return <Section id='portfolio' ref={element}>
        <div className="grid">
            <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-one grid-box"></motion.div>
            <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-two grid-box"></motion.div>
            <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-three grid-box"></motion.div>
            <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-four grid-box"></motion.div>
            <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-five grid-box"></motion.div>
            <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-six grid-box"></motion.div>
            <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-seven grid-box"></motion.div>
            <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-eight grid-box"></motion.div>
            <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-nine grid-box"></motion.div>
            <motion.div variants={portfolioAnimations} animate={controls} transition={{ delay: 0.03, type: "tween", duration: 0.8 }} className="child-ten grid-box"></motion.div>            
        </div>
        <div className="portfolio-more">
            <span>Load More</span>
            <img src={loadmore} alt="Load More" />
        </div>
    </Section>     
}

const Section = styled.section`
    min-height: 100vh;
    padding-bottom: 2rem;
    background-color: var(--secondary-color);
    .grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-areas: 
        "one two four"
        "three three six"
        "five seven seven"
        "eight nine ten";
        .grid-box{
            height: 15rem;
            width: 100%;
            cursor: pointer;
            &:nth-of-type(1) {
                grid-area: one;
                background: url(${portfolio1}) no-repeat right top;
                background-size: cover;
                height: 100%;
                z-index: 10;
            }
            &:nth-of-type(2) {
                grid-area: two;
                background: url(${portfolio2}) no-repeat center center;
                background-size: cover;
                height: 500px;
                width: 500px;
                z-index: 10;
            }
            &:nth-of-type(3) {
                grid-area: three;
                background: url(${portfolio3}) no-repeat top center;
                background-size: cover;
                ${'' /* height: 100%; */}
                height: 500px;
                width: 100%;
                z-index: 10;
            }
            &:nth-of-type(4) {
                grid-area: four;
                background: url(${portfolio4}) no-repeat top center;
                background-size: cover;
                height: 100%;
                width: 500px;
                z-index: 10;
            }
            &:nth-of-type(5) {
                grid-area: five;
                background: url(${portfolio5}) no-repeat center center;
                background-size: cover;
                height: 480px;
                width: 500px;
                z-index: 10;
            }
            &:nth-of-type(6) {
                grid-area: six;
                background: url(${portfolio6}) no-repeat right center;
                background-size: cover;
                height: 100%;
                width: 100%;
                z-index: 10;
            }
            &:nth-of-type(7) {
                grid-area: seven;
                background: url(${portfolio7}) no-repeat center center;
                background-size: cover;
                height: 100%;
                width: 100%;
                z-index: 10;
            }
            &:nth-of-type(8) {
                grid-area: eight;
                background: url(${portfolio8}) no-repeat right center;
                background-size: cover;
            }
            &:nth-of-type(9) {
                grid-area: nine;
                background: url(${portfolio9}) no-repeat top center;
                background-size: cover;
            }
            &:nth-of-type(10) {
                grid-area: ten;
                background: url(${portfolio10}) no-repeat right center;
                background-size: cover;
            }
        }
    }
    .portfolio-more{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin: 1rem 0;
        span{
            color: #fff;
            letter-spacing: 0.1rem;
            text-transform: uppercase;
            margin-top: 1rem;
        }
    }
    @media screen and (min-width: 1081px) and (max-width: 1370px){
        .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-areas: 
            "one two four"
            "two three three"
            "five seven six"
            "eight nine ten";
            padding: 0;            
            .grid-box {
                height: 25rem !important;
            }
        }
        /* .portfolio-more{
            margin-top: -22rem;
        } */
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) { 
        .grid {
            padding: 0;
            grid-template-columns: 1fr;
            grid-template-areas:
            "one"
            "two"
            "three"
            "four"
            "five"
            "six"
            "seven"
            "eight";
            .grid-box {
                height: 25rem !important;
            }
        }
        .portfolio-more{
            margin-top: -22rem;
        }
    }
`;

export default Portfolio
import Logo from 'components/ui/Logo/Logo';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sprite from "../../svg/symbol-defs.svg";

import { Circle } from 'sections/Faq/Faq';
import Paragraph from 'components/ui/Paragraph/Paragraph';
import content from 'data/common.json';
import { ScrollButton } from 'components/ui/ScrollButton/ScrollButton';
const Container = styled.header`
  width: 100%;
    position: fixed;
    z-index: 5;   
    top: 0;
    left: 0;
   text-align: center;
    transition: background-color 0.3s ease; 
    overflow: hidden;
    &.scrolled {
        background-color: var(--white);
    }

`;
const BoxHeader = styled.div`
 display: flex;
   padding: 36px 20px;
    justify-content: space-between;
    align-items: center;
      width: calc(100% - 45px);
      @media (min-width: 480px){
width: 440px;
margin: 0 auto;
    }
    @media (min-width: 768px){
         padding: 36px 30px 40px 30px;
         width: 708px;  
    }
      @media (min-width: 1280px){
          padding: 24px 20px;
         width: 1240px;
    }
`;
const BurgerButton = styled.button`
    width: 40px;
    height: 39px;
    border-radius: 100%;
    background-color: var(--accent-button-color);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    outline: none;
    transition: all 300ms ease-in-out;
    &:hover {
        background-color: var(--accent-color);
    }
    &:focus {outline: auto}
`;

const StyledSvg = styled.svg`
    stroke: var(--black);
`;
const StyledSvgArrow = styled.svg`
    stroke: var(--main-color);
    fill: var(--main-color);
  transform: rotate(180deg);
  width: 10px;
  height: 10px;
  text-align: center;
  padding: 2px;
`;
const Box = styled.div`
display: flex;
gap:12px;
`;
const ButtonBox = styled.div`
display: none;
@media (min-width: 768px){
    display: flex;
    width: 140px;
}`;
const Header = ({ setModalOpen, modalOpen }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const scrollThreshold = 20;
            setIsScrolled(scrollTop > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleModal = () => {
        setModalOpen(!modalOpen);

    };

    const containerClass = isScrolled ? 'scrolled' : '';

    return (

        <Container className={containerClass}>
            <BoxHeader>
                <Logo />
                <Box>
                    <BurgerButton onClick={toggleModal} type='button' aria-label={content.header.ariaLabel}>
                        <StyledSvg width={16} height={16}>
                            <use href={`${sprite}#icon-menu`} />
                        </StyledSvg>
                    </BurgerButton>
                    <ButtonBox>
                        <ScrollButton href={content.header.href} >
                            <Paragraph>{content.header.button}</Paragraph>
                            <Circle>
                                <StyledSvgArrow >
                                    <use href={`${sprite}#icon-arrow-top`} />
                                </StyledSvgArrow>
                            </Circle>
                        </ScrollButton>
                    </ButtonBox>
                </Box>
            </BoxHeader>
        </Container>
    );
};

export default Header;

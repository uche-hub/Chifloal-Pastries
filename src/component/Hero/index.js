import React from 'react'
import { Navbar } from '../Navbar'
import { HeroContainer, HeroContent, HeroItem, HeroH1, HeroP, HeroBtn } from './HeroElement'
import { motion, AnimatePresence } from 'framer-motion';

export const Hero = () => {
    return (
        <HeroContainer>
            <Navbar />
            <AnimatePresence>
                <HeroContent>
                    <HeroItem>
                        <HeroH1 data-aos='fade-down' data-aos-duration='600'>Amazing Pastries Ever</HeroH1>
                        <HeroP data-aos="fade-right" data-aos-duration='900'>Place Your Order Now!</HeroP>
                        <HeroBtn data-aos="flip-left" data-aos-duration='2000'>Place Order</HeroBtn>
                    </HeroItem>
                </HeroContent>
            </AnimatePresence>
        </HeroContainer>
    )
}

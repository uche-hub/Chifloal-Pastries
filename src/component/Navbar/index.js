import React from 'react'
import { Bars, Nav, NavIcon, NavLink } from './navbarElement'

export const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/' data-aos="zoom-in" data-aos-duration='800'>CHIFLORAL</NavLink>
                <NavIcon>
                    <p>Menus</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}
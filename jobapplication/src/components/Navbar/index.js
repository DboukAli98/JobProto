import React from 'react';
import {ReactComponent as Logo } from '../../logohire.svg';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                <Logo height={80} width={100}/>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/findj" activeStyle>
                        Find Job
                </NavLink>
                <NavLink to="/dashboard" activeStyle>
                        Job Dashboard
                </NavLink>
                    <NavLink to="/createcv" activeStyle>
                        Create CV
                </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/login'>Log In</NavBtnLink>
                    <NavBtnLink to='/register'>Register</NavBtnLink>
                </NavBtn>
            </Nav>

        </>

    );
};
export default Navbar;
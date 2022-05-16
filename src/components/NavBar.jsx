import styled from 'styled-components'
import { useState } from 'react'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [expanded, toggleExpanded] = useState(false);
  
    return (
        <NavBarWrapper className='primary' isExpanded={expanded}>
            <div className='mainAxis row'>
                <img className='logo' src='/Logo.png' alt='Noelle Kuti Logo'/>
                <Link to='/skills' className='nav-item'>
                    Skills    
                </Link>
                <Link to='/projects' className='nav-item'>
                    Projects    
                </Link> 
                <Link to='/aboutme' className='nav-item'>
                    About Me    
                </Link> 
                <Link to='/connect' className='nav-item'>
                    Connect    
                </Link>  
            </div>
        </NavBarWrapper>
    )
}

const NavBarWrapper = styled.nav`
    .mainAxis {
        width: 100%;
        background-color: var(--cyprus);
    }
    
    .logo {
        height: 3rem;
        width: 3rem;
    }

`
export default NavBar
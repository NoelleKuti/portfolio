import styled from 'styled-components'
import { useState } from 'react'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [expanded, toggleExpanded] = useState(false);
  
    return (
        <NavBarWrapper className='primary' isExpanded={expanded}>
            <div className='nav row'>
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
            </div>
        </NavBarWrapper>
    )
}

const NavBarWrapper = styled.nav`
    .nav {
        width: 100vw;
        height: 2rem;
        padding: 1rem;
    }

    .mainAxis {
        width: 100vw;
        background-color: var(--cyprus);
        height: 1rem;
        align-items: center;
        justify-content: space-between;
    }

    .nav-item {
        padding: 2rem;
        font-size: 20px;
        color: var(--eastSide);
        border: 2px solid var(--sanMarino);
        text-align: center;
        border-radius: 50%;
        height: 3rem;
        width: 3rem;
        :hover {
            color: white;
            border: 2px solid white;
        }
    }
    
    .logo {
        height: 3rem;
        width: 3rem;
    }

`
export default NavBar
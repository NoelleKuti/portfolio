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
                        <p className='nav-label'>
                            Skills
                        </p>    
                    </Link>
                    <Link to='/projects' className='nav-item'>
                        <p className='nav-label'>
                            Projects
                        </p>  
                    </Link> 
                    <Link to='/aboutme' className='nav-item'>
                        <p className='nav-label'>
                            About Me
                        </p>    
                    </Link> 
                    <Link to='/connect' className='nav-item'>
                        <p className='nav-label'>
                            Connect
                        </p>    
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
        margin-top: 1rem;
        padding-right: 2rem;
    }

    .nav-item {
        padding: 2rem;
        color: var(--eastSide);
        border: 2px solid var(--sanMarino);
        border-radius: 50%;
        height: 4rem;
        width: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        
        
        :hover {
            color: white;
            border: 2px solid white;
        }
    }
    
    .nav-label {
        text-align: center;
        width: 6rem;
    }
    .logo {
        height: 4rem;
        width: 4rem;
    }

`
export default NavBar
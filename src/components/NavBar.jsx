import { useState, React } from 'react'
import { Link }  from 'react-router-dom'
import  styled  from 'styled-components'
import Logo from '../assets/images/logo.png'

const NavBar = () => {
    const [expanded, setExpanded] = useState(false);
    
    return (
        <NavWrapper expanded={expanded}>
            <div className='nav'>
                <Link to='/' className='homeLink'>
                    <img src={Logo} className='logo' alt='Noelle Kuti Logo' />
                </Link> 
                <Link to='/skills' className='navLink'>
                    Skills
                </Link>
                <Link to='/aboutme' className='navLink'>
                    About Me
                </Link>
                <Link to='/projects' className='navLink'>
                    Projects
                </Link>
                <Link to='/connect' className='navLink'>
                    Connect
                </Link>
                <button className='toggleBtn'>
                    ☰
                </button>
            </div>
        </NavWrapper>
    )
}

const NavWrapper = styled.div `
        background-color: var(--cyprus);
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;

    .nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
        padding: 1rem;
    }
    
    .logo {
        height: 4rem;
    }

    .navLink {
        display: ${props => (props.expanded ? 'initial' : 'none')};
        color: var(--eastSide);
        align-self: center;
        text-align: center;
        padding: 1.5rem;
        width: 20%;
        white-space: no-wrap;
        :hover {
            background-color: var(--eastSide);
            color: var(--cyprus);
        }
    }

    .homeLink {
        display: flex;
    }

    .toggleBtn {
        background-color: transparent;
        border: none;
        box-shadow: none;
        color: var(--eastSide);
        padding: 1rem;
        font-size: 2rem;
        cursor: pointer;
    }



`
export default NavBar
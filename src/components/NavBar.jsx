import { useState, React } from 'react'
import { Link }  from 'react-router-dom'
import  styled  from 'styled-components'
import Logo from '../assets/images/logo.png'

const NavBar = () => {
    const [expanded, setExpanded] = useState(false);
    
    return (
        <NavWrapper expanded={expanded}>
            <div className='nav'>
                <div className='navButtons'>
                    <Link to='/' className='homeLink'>
                        <img src={Logo} className='logo' alt='Noelle Kuti Logo' />
                    </Link>
                    <button className='toggleBtn' onClick={() => setExpanded(!expanded)}>
                        {expanded ? 'X' : '☰'}
                    </button>
                </div>
           
                <div className='navItems'>
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
                </div>
            </div>
        </NavWrapper>
    );
}

const NavWrapper = styled.div `
        background-color: var(--cyprus);
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;

    .navItems {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
        width: 90%;
    }
    
    .nav {
        height: 6rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 97%;
        margin: 0px auto;
    }

    .logo {
        height: 4.5rem;
    }

    .navLink {
        color: var(--eastSide);
        align-self: center;
        text-align: center;
        padding: 1.5rem;
        width: 22%;
        white-space: no-wrap;
        :hover {
            background-color: var(--eastSide);
            color: var(--cyprus);
        }
    }

    

    .toggleBtn {
        display: none;
        background-color: transparent;
        border: none;
        box-shadow: none;
        color: var(--eastSide);
        padding: 1rem;
        font-size: 2rem;
        cursor: pointer;
    }

    .navButtons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }


    @media only screen and (max-width: 600px) {
        .toggleBtn {
            border: 2px solid white;
            display: initial;
        }

        .navItems {
            display: ${props => props.expanded ? 'flex' : 'none'};
            flex-direction: column;
        }

        .nav {
            justify-content: space-between;
            display: flex;
            flex-direction: column;
        }

        .navLink {
            width: 100vw;
        }

        .navButtons {
            width: 100%;
        }
    }


`
export default NavBar
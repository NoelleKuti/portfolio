import React, { useState } from 'react'
import styled from 'styled-components';

const Project = ({link, imgLink}) => {

    const [showText, setShowText] = useState(false);
    const [blur, setBlur] = useState(false);

    const handleHover = (toggle) => {
        if (toggle === 'on') {
            setShowText(true);
            setBlur(true);
        } else if (toggle === 'off') {
            setShowText(false);
            setBlur(false);
        } else {
            console.log('invalid toggle value passed')
        }
         
    }
  
    return (
        <ProjectCard className='projectCard' showText={showText} blur={blur} onMouseEnter={() => handleHover('on')} onMouseLeave={() => handleHover('off')}>
            <a href={link} target='_blank' className='projectLink'>
                <div className='projectInfo'>
                    <h2 className='projectTitle'> Weather App </h2>
                    <p> blah blah blah blah</p>
                </div>
            
                <img src={imgLink} alt='Weather App Using React.js' className='projectImg' />
            </a>
        </ProjectCard>
    );
}

const ProjectCard = styled.div`
    .projectCard {
        position: relative;
        border: 1px solid white;
        margin: 1rem 1rem;
    }

  
    .projectImg {
        width: 300px;
        height: 400px;
        position: absolute;
        top:0;
        transition: filter 1s;
        filter: ${props => props.blur ?
    'blur(5px)' : 'blur(0)'};
    }

    .projectInfo {
        padding: 2rem;
        display: block;
        border: ${props => props.showText ? '2px solid var(--Finn)' : 'none'};
        color: var(--Finn);
        width: 300px;
        position: absolute;
        top: 0;
        bottom: 0;
        transition: opacity 1s;
        z-index: 3;
        opacity: ${props => props.showText ? 1 : 0};
    }

    .projectLink {
        cursor: pointer;
        width: 300px;
        height: 400px;
        z-index: 4;
    }


`
export default Project
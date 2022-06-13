import React, { useState } from 'react'
import styled from 'styled-components';

const Project = ({link, imgLink, projectTitle, projectText}) => {

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
        <ProjectCard className='projectCard' showText={showText} blur={blur} >
            <a href={link} target='_blank' className='projectCard' onMouseEnter={() => handleHover('on')} onMouseLeave={() => handleHover('off')}>
                <img className='projectImg' src={imgLink} alt='project' />
                <div className='projectInfo'>
                    <h2 className='projectTitle'> {projectTitle} </h2>
                    <p>Coded Using:</p>
                    <ul>
                        {projectText.codedUsing.map((item, index) =>
                            <li key={'CU' + index}>{item}</li>
                        )}
                    </ul>
                    <p>Features:</p>
                    <ul>
                        {projectText.features.map((item, index) =>
                            <li key={'F' + index}>{item}</li>)}
                    </ul>
                </div>
               

            </a>
        </ProjectCard>
    );
}

const ProjectCard = styled.div`
     .projectCard {
        position: relative;
        display: grid;
        place-items: center;
        grid-template-areas: "main";
        height: 300px;
        width: 300px;
        overflow: hidden;
        cursor: pointer;
     }

     .projectCard > * {
        grid-area: "main";
     }

    .projectImg {
        width: 100%;
        aspect-ratio: 1/1;
        object-fit: cover;
        transition: filter 1s;
        filter: ${props => props.blur ?
    'blur(5px)' : 'blur(0)'};
    }

    .projectInfo {
        grid-area: "main";
        border: ${props => props.showText ? '2px solid var(--Finn)' : 'none'};
        color: var(--Finn);
        transition: opacity 1s;
        opacity: ${props => props.showText ? 1 : 0};
        max-height: 100%;
        overflow-y: scroll;
        margin: 0px auto;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        p, ul, h2 {
            padding: 0;
            padding-left: 2rem;
        }
        li {
            padding-left: 1rem;
            text-decoration: none;
        }
    }




`
export default Project
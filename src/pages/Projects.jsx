import styled from 'styled-components';
import weather from '../assets/images/React_Weather_App.png'

const Projects = () => {
  return (
    <ProjectsWrapper className='fullPage'>
        <div className='container'>
          <div className='projectCard'>
            <h2 className='projectTitle'> Weather App </h2>
            <a href='https://nk-weather-app.netlify.com' target='_blank' className='projectLink'>
              <img src={weather} alt='React Weather App' className='projectImg'/>
            </a>
          </div>
        </div>
    </ProjectsWrapper>
  )
}

const ProjectsWrapper = styled.div`
  background-color: var(--eastSide);
  

  .projectCard {
    height: 300px;
    width: 200px;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    position: relative;
    border: 2px solid white;
  }

  
  .projectImg {
    width: 100%;
    height: 80%;
    position: absolute;
    top: 20%;
  }

  .projectTitle {
    text-align: center;
    color: var(--cyprus);
  }

`
export default Projects
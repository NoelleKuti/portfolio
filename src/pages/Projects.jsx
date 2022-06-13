import styled from 'styled-components';
import weather from '../assets/images/React_Weather_App.png'
import Project from '../components/Project';

const Projects = () => {
  return (
    <ProjectsWrapper className='fullPage'>
      <div className='container'>
        <Project
          link='https://nk-weather-app.netlify.com'
          imgLink={weather}
          projectTitle='Weather API App'
          projectText={
            {
              codedUsing: ['React', 'Styled-Components', 'WeatherAPI.com'],
              features: ['Fahrenheit / Celsius toggle', '3 Day Forecast / Current Forecast toggle', 'useReducer hook', 'fetch api']
            }}
        />
        <Project
          link='https://nk-weather-app.netlify.com'
          imgLink={weather}
          projectTitle='Weather API App'
          projectText={
            {
              codedUsing: ['React', 'Styled-Components', 'WeatherAPI.com'],
              features: ['Fahrenheit / Celsius toggle', '3 Day Forecast / Current Forecast toggle', 'useReducer hook', 'fetch api']
            }}
        />
      </div>
    </ProjectsWrapper>
  )
}

const ProjectsWrapper = styled.div`
  background-color: var(--eastSide);
  padding-top: 5rem;

.container {
  display: flex;
  justify-content: space-around;
  width: 100vw;
  height: 200%;
  border: 2px solid blue;
  
}

`
export default Projects
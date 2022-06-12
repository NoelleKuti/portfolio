import styled from 'styled-components';
import PicOfMe from '../assets/images/PicOfMe.png'

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <div className='fullPage'>
        <h1>ABOUTME</h1>
        <img src={PicOfMe} alt='Noelle' className='picOfMe' />
      </div>
    </AboutMeWrapper>
  )
}

const AboutMeWrapper = styled.div `
  background-color: #DEADD9;

  .picOfMe {
    width: 40%;
  }
`
export default AboutMe
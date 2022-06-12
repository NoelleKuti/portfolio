import styled from 'styled-components'

const Landing = () => {
  return (
    <LandingPage className='fullPage'>
       <p>Landing</p>
    </LandingPage>
  )
}

const LandingPage = styled.div`
    background-image: url('/Computer1.png');
    background-size: cover;
    min-height: 100vh;
    min-width: 100vw;
    filter: blur(2px);
    
   

`
export default Landing
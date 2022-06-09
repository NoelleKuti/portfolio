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
    height: 100vh;
    width: 100vw;
`
export default Landing
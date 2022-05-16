import styled from 'styled-components'
import { NavBar } from '../components'

const Landing = () => {
  return (
    <LandingPage>
        <NavBar />
       <p>Landing</p>
    </LandingPage>
  )
}

const LandingPage = styled.main`
    background-image: url('/Computer1.png');
    background-size: cover;
    height: 100vh;
    width: 100vw;
`
export default Landing
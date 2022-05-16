import styled from 'styled-components'

const Landing = () => {
  return (
    <LandingPage>
        <div className='heroImgWrapper'>
        </div>
        
        <h1></h1>
    </LandingPage>
  )
}

const LandingPage = styled.main`
    
    .heroImgWrapper {
        width: 100vw;
        height: 100vh;
        background-image: url('/Computer1.png');
        background-size: cover;
    }



`
export default Landing
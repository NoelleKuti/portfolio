import styled from 'styled-components'
import { motion } from 'framer-motion'
import PicOfMe from '../assets/images/PicOfMe.png'

const Test = () => {
  return (
    <TestDiv as={motion.div} animate={{ scale: 0.5 }}>
        <p>Test</p>
        <img src={PicOfMe} className='picOfMe' />
    </TestDiv>
    
  )
}

const TestDiv = styled.div`
    background-color: blue;
    height: 50rem;
    width: 50rem;

    .picOfMe {
        max-height: 50%;
        max-width: 50%;
    }



`
export default Test